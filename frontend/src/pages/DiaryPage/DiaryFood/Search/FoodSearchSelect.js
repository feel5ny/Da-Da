import React, { Component } from 'react'
import {
  Input,
  Icon,
  Button,
  Popup,
} from 'semantic-ui-react'
import {
  submitBtn,
  cancelBtn,
} from '../../StyledDiary'
import {
  postFoodToDB,
  clearSelect,
  clearImgUrl,
} from '../../../../actions/diaryFood'
import { connect } from 'react-redux'
import multiplyIcon from '../../../../static/img/diary-multiply.svg'
import returnIcon from '../../../../static/img/diary-return.svg'
// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../../helper/date'

class FoodSelectDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finalKcal: '-',
      inputAmount: '',
      disabled: false,
      meal_tag: '',
      loading: false,
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  // 태그명에 따라서 Enum 타입으로 변환
  componentWillMount() {
    if (this.props.type === '아침') {
      return this.setState({
        meal_tag: 1,
      })
    }
    if (this.props.type === '점심') {
      return this.setState({
        meal_tag: 2,
      })
    }
    if (this.props.type === '저녁') {
      return this.setState({
        meal_tag: 3,
      })
    }
    if (this.props.type === '간식') {
      return this.setState({
        meal_tag: 4,
      })
    }
  }

  componentDidMount() {
    if (this.props.isSelected) {
      this.textInput.focus()
    }
  }

  // 먹은 양 받기
  handleAmount = e => {
    const finalKcal =
      this.props.calculateKcal * e.target.value
    this.setState({
      finalKcal: finalKcal.toFixed(3),
      inputAmount: e.target.value,
    })
    // 양 입력 안했을 경우 버튼 비활성화
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  // keydown 이벤트
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.createPayloadAndPostToDB()
    }
  }

  postDelay = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      }),
        this.props.toggleSearchMode()
    }, 200)
  }

  // payload 생성
  createPayloadAndPostToDB = () => {
    const {
      inputAmount,
      date,
      meal_tag,
    } = this.state

    const {
      foodAlbumResult,
      foodResult,
    } = this.props

    if (!inputAmount || inputAmount < 1) {
      return this.setState({
        disabled: true,
      })
    }
    const requestBody = {
      amount: inputAmount * 1,
      date: date,
      food_id: foodResult.food_id,
      meal_tag: `${meal_tag}`,
      picture: foodAlbumResult,
    }

    this.props.postFoodToDB(requestBody, date)

    this.setState({ loading: true }, () =>
      this.postDelay(),
    )
    this.props.clearImgUrl()
  }

  render() {
    const {
      disabled,
      finalKcal,
      loading,
    } = this.state

    const {
      foodResult,
      calculateKcal,
      isSelected,
      toggleSearchMode,
    } = this.props

    const details = (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span className="diary-food-search-label-result-title">
          {foodResult.food_name_ko}
        </span>
        <span className="diary-food-search-label-result-kcal">
          {calculateKcal}
        </span>
        <div className="diary-food-search-label-result-input">
          <img
            src={multiplyIcon}
            className="diary-food-calculateIcon"
            alt="곱하기 모양의 아이콘입니다."
          />
          <Input
            ref={input =>
              (this.textInput = input)}
            placeholder="얼마나 먹었나요?"
            onChange={e => this.handleAmount(e)}
            style={{ width: '105px' }}
            type="number"
            onKeyDown={this.handleKeyPress}
            error={disabled}
          />
          <span className="diary-food-search-label-result-unit">
            {foodResult.food_unit}
          </span>
          <img
            src={returnIcon}
            className="diary-food-calculateIcon"
            alt="= 모양의 아이콘입니다."
          />
          <div className="diary-food-search-label-result-wrapper">
            <span className="diary-food-search-label-result-calculateKcal">
              {finalKcal}
            </span>
            <span className="diary-food-search-label-result-unit">
              kcal
            </span>
          </div>
        </div>
      </div>
    )

    const blank = (
      <span className="diary-food-search-label-result-title">
        <Icon color="teal" name="check" />
        검색 후 먹은 음식을 선택하세요.
      </span>
    )

    return (
      <div className="diary-food-search-label">
        <div className="diary-food-search-label-result">
          {isSelected ? details : blank}
        </div>
        <div>
          <Popup
            trigger={
              <Icon
                name="help circle outline"
                size="large"
                color="teal"
                style={{ marginRight: '14px' }}
              />
            }
            header="음식의 양"
            content="개인이 느끼는 1인분의 기준은 각자의 신체조건, 상태에 따라 매우 주관적이므로, 정확한 칼로리 계산을 위해서는 음식의 양을 입력해야합니다."
          />
          <Button
            basic
            style={{
              ...cancelBtn,
              marginRight: '9px',
            }}
            onClick={toggleSearchMode}
          >
            취소
          </Button>
          <Button
            className="diary-food-meal-submitBtn"
            style={submitBtn}
            onClick={
              this.createPayloadAndPostToDB
            }
            loading={loading}
            disabled={disabled}
          >
            등록
          </Button>
        </div>
      </div>
    )
  }
}

FoodSelectDetails.defaultProps = {
  foodResult: {
    food_id: '',
    food_name_ko: '',
    food_unit: '',
    food_protein: '',
    food_carb: '',
    food_fat: '',
  },
}

const mapStateToProps = state => {
  return {
    dateState: state.today.date,
    keyword: state.foodLogs.visionresultKeyword,
    foodAlbumResult:
      state.foodLogs.foodAlbumResult,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postFoodToDB: (requestBody, date) =>
      dispatch(postFoodToDB(requestBody, date)),
    clearSelect: () => dispatch(clearSelect()),
    clearImgUrl: () => dispatch(clearImgUrl()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodSelectDetails)
