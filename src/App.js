import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
  const [newvalues, setNewvalues] = useState("")

  const onchangevalnew = (e) => {
    setNewvalues(e.target.value)
  }

  return (
    <div>
      <h1>Susai Nathan</h1>
      {newvalues}
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
       
      </Form>
       <input type="text" value={newvalues} onChange={onchangevalnew}></input>
      <Button variant="primary">Primary1</Button>
      <Button variant="secondary">Secondary2</Button>
    </div>
  );
}

export default App;
