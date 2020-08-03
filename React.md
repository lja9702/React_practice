# React

#### JSX 파일 안에서 Javascript 값 사용

- const: 한번 선언하고 바뀌지않는 값
- let: 바뀌게 될 수 있는 값



#### 다루는 Data

- props: 부모 컴포넌트 -> 자식 컴포넌트에게 주는 값으로, 자식컴포넌트에서는 직접 수정이 불가능하다
- state: 컴포넌트 내부에서 선언되고 내부에서 값 변경이 가능하다



#### Method 관련

- Handle Decrese = () => {this.setState({...});} 꼴
- => : this가 풀리지 않게 해줌



#### this.setState

- state에 있는 값을 바꾸기위해서 꼭 거쳐야함
- 이 함수가 호출되어야 컴포넌트 리렌더링
- 객체로 전달되는 값만 업데이트



#### ...

- Javascript 전개연산자
- 기존의 객체내용을 해당위치에 풀어준다는 의미

```react
// 방법 1
this.setState(
  (state => ({
    number: state.number + 1
  }))
)

// 방법 2
this.setState(
  ({number}) => ({
    number: number + 1
  })
);

//방법 3
const {number} = this.state;
this.setState({
  number: number + 1
});
```



#### onClick

이벤트에 전달해주는 값은 함수여야 함

ex) onClick = {this.handleIncrease}



#### LifeCycle API

- **componentWillMount**

  컴포넌트가 화면에서 나가기 직전에 호출

- **componentDidMount**

  컴포넌트가 화면에 나타나게 되었을 때 호출

  ex) DOM 사용하는 외부 라이브러리 연동, ajax 요청, DOM 속성 읽기/변경 작업

- **componentWillReceiveProps(nextProps)**

  컴포넌트가 새로운 props를 받게되었을 때 호출

  state가 props에 따라 변해야하는 로직 작성

- **getDerivedStateFromProps(nextProps, prevState)**

  props로 받아온 값을 state로 동기화하는 작업 시 사용

- **shouldComponentUpdate(nextProps, nextState)**

  컴포넌트 최적화 시 유용하며, 기본적으로 true 반환

  따로 작성하여 조건에 따라 false를 반환하면 해당 조건에는 render 함수 호출 X

- **componentWillUpdate(nextProps, nextState)**

  shouldComponentUpate에서 true 반환시 호출

  ex) 애니메이션 효과 초기화, 이벤트리스너 없애는 작업

- **componentDidUpdate(prevProps, prevState)**

  컴포넌트에서 render()를 호출하고 난 다음에 발생

  this.props와 this.state가 바뀌어 있는 상태에서 진행

- **componentWillUnmount**

  등록했던 이벤트 제거



#### onChange 이벤트

- event.target.value 값을 통해 텍스트 값 읽어올 수 있음
- Event.target.name으로 input name 속성 조회 가능



#### Computed property name

객체의 key 값을 표현식 (벼수, 함수 등을 이용)을 통해 지정하는 것으로, [ ] 사용

```react
handleChange = (e) => {
  this.setState({
    [num + ") " + name1]: "반장",
    [e.target.name]: e.target.value
  });
}
```

