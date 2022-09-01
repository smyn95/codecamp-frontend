/* 08  객체의 선언과 할당 */

const student = {
  name: '철수'
}

// student.name = "철수"
// student['name'] = '철수'

console.log(student)
////////////////////////////////////////////////
////////////////////////////////////////////////
/* 09  객체의 키&값 추가 */

const students = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

// student 의 school 키 값에
// school 객체를 통째로 할당
students.school = school
// student["school"] = school