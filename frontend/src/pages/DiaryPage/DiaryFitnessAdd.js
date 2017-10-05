import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import MdAdd from 'react-icons/lib/md/add'

class DiaryFitnessAdd extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Button
        fluid
        style={{
          textAlign: 'left',
          padding: '8px 14px',
          color: '#16325C',
          backgroundColor: 'transparent',
          borderRadius: '4px',
          fontWeight: '200',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <MdAdd
          size={20}
          style={{ marginRight: '10px' }}
        />
        운동 추가하기
      </Button>
    )
  }
}

export default DiaryFitnessAdd
