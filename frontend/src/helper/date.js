// 요일 구하는 함수 ===============================================

export const setDay = day => {
  switch (day) {
    case 0:
      return '일'
    case 1:
      return '월'
    case 2:
      return '화'
    case 3:
      return '수'
    case 4:
      return '목'
    case 5:
      return '금'
    case 6:
      return '토'
    default:
      return console.error(
        '예외 발생:',
        day,
        '// 파라미터는 getDay()로 얻어진 정수여야 합니다.',
      )
  }
}

// 날짜 포맷 변환 함수 ===============================================

//-----------------------------------------------------------------
// 1. String -> String
//-----------------------------------------------------------------

// API 통신용 날짜 포맷
// YYYY. MM. DD. -> YYYYMMDD
export const dateStringForApiQuery = dateString => {
  const splitArray = dateString.split('.')
  splitArray.map((el, i, arr) => {
    arr[i] =
      // 월이나 일이 한 자리 숫자일 때
      // ex. 2017. 11. 1. -> 2017. 11. 01.
      el.replace(/ /gi, '').length === 1
        ? '0' + el
        : el
  })
  return splitArray.join('').replace(/ /gi, '')
}

// YYYY. MM. DD. -> YYYY-MM-DD
export const dateDotToDateDash = dateString => {
  return dateString
    .replace(/ /gi, '')
    .split('.')
    .join('-')
    .substr(0, 10)
}

// YYYY-MM-DD -> YYYY. MM. DD.
export const dateDashToDateDote = dateString => {
  return dateString.split('-').join('. ') + '. '
}

// YYYY-MM-DD -> YYYY년 MM월 DD일
export const dateDashToKR = dateString => {
  const yyyy = dateString.substr(0, 4)
  const mm = dateString.substr(5, 2)
  const dd = dateString.substr(8, 2)
  return `${yyyy}년 ${mm}월 ${dd}일`
}

//-----------------------------------------------------------------
// 2. String -> Date
//-----------------------------------------------------------------

// YYYY-MM-DD -> DATE
export const dateDashToDateType = dateString => {
  const yyyy = dateString.substr(0, 4)
  const mm = dateString.substr(5, 2)
  const dd = dateString.substr(8, 2)
  return new Date(yyyy, mm - 1, dd)
}

// YYYY. MM. DD. -> DATE
export const dateDotToDateType = dateString => {
  const yyyy = dateString.substr(0, 4)
  const mm = dateString.substr(6, 2) * 1
  const dd = dateString.substr(10, 2)
  return new Date(yyyy, mm - 1, dd)
}

// 날짜 계산하는 함수 ===================================================

// N일전 날짜(date타입) 구하는 함수
export const getDateNDaysBefore = (
  dateType,
  n,
) => {
  return new Date(
    dateType.getFullYear(),
    dateType.getMonth(),
    dateType.getDate() - n,
  )
}

// N일후 날짜(date타입) 구하는 함수
export const getDateNDaysAfter = (
  dateType,
  n,
) => {
  return new Date(
    dateType.getFullYear(),
    dateType.getMonth(),
    dateType.getDate() + n,
  )
}

// 시작일부터 일주일치 Array 반환
export const getWeekArray = dateTypeStartDate => {
  const dateArray = []
  for (let i = 0; i < 7; i++) {
    dateArray.push(
      new Date(
        dateTypeStartDate.getFullYear(),
        dateTypeStartDate.getMonth(),
        dateTypeStartDate.getDate() + i,
      ),
    )
  }
  return dateArray
}

// d-day 구하는 함수
export const calculateDday = (
  startDate, // 시작 날짜, Date 타입
  targetDate, // D-day 구하려는 날짜, Date 타입
) => {
  return Math.round(
    (targetDate.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24) +
      1,
  )
}
