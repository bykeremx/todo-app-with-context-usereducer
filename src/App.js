import { Col, Container, Row } from "reactstrap";
import CreateTodoInput from "./components/CreateTodoInput";
import TodoListContainer from "./components/TodoListContainer";
import { useContext, useEffect } from "react";
import TodoContext from "./context/TodoContext";
import axios from "axios";


function App() {

  const { todoReducer, dispatch } = useContext(TodoContext)
  //çek 
  useEffect(() => {
    try {

      axios.get("http://localhost:3001/todos").then((response) => {
        dispatch({
          type: "ListTodos",
          payload: response.data,
        });
      })
    } catch (error) {
        console.error(error);
    }

  }, []);
  console.log(todoReducer);
  return (
    <>

      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4} className="shadow-sm p-3">
            <CreateTodoInput></CreateTodoInput>
          </Col>
          <Col sm={4}></Col>
        </Row>
        <Row>
          {/* Todo List will go here */}
          <TodoListContainer></TodoListContainer>
        </Row>
      </Container>
    </>
  );
}

export default App;
