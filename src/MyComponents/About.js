import React from 'react'

const About = () => {
  return (
    <>
    <div className="container" style={{ minHeight: "83vh" }}>
    <div className="row">
        <div className="col-md-12">
            <h4 className="text-center">About Todo List</h4>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6 mt-2">
            <img src="https://t3.ftcdn.net/jpg/05/13/59/72/360_F_513597277_YYqrogAmgRR9ohwTUnOM784zS9eYUcSk.jpg" className="img-fluid w-100" alt="pic" style={{borderRadius: "10px"}}/>
        </div>
        <div className="col-md-6 mt-2" style={{textAlign: "justify"}}>
            <p>The Todo List Project developed using React showcases a modern, interactive approach to task management. Utilizing React's component-based architecture, the project allows users to efficiently organize their tasks through a clean and intuitive user interface. The application leverages state management to dynamically update and display tasks in real-time, offering seamless additions, deletions, and updates to todo items without the need for page refreshes. This responsiveness is complemented by React's efficient virtual DOM rendering, ensuring smooth performance even with a large number of tasks.</p>
            <p>In addition to basic task management functionalities such as adding new todos, updating them, and deleting them, the Todo List Project integrates key features for user convenience. The project exemplifies React's capability to handle complex UI logic while maintaining a structured and maintainable codebase, making it an ideal choice for scalable and interactive web applications centered around task organization and productivity.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
