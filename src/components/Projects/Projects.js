import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WiFi from "../../Assets/Projects/WiFi.jpeg";
import Awaazo from "../../Assets/Projects/Awaazo.jpeg";
import NeuroNote from "../../Assets/Projects/NeuroNote.webp";
import SkillSwipe from "../../Assets/Projects/SkillSwipe.jpeg";
import Ecommerce from "../../Assets/Projects/Ecommerce.jpeg"
import Face from "../../Assets/Projects/FaceRecognition.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Awaazo}
              isBlog={false}
              title="Awaazo"
              description={
                <ul>
                  <li>This App is a podcast platform that allows users to listen to podcasts and create their own. Users can use AI to transcribe their podcasts and generate subtitles.</li>
                  <li>Implemented Redux for state management and React Router for navigation.</li>
                  <li>Developed secure RESTful APIs in C# and .NET Core, focusing on authentication, data processing, and CRUD operations.</li>
                  <li>Utilised C# and Entity Framework to create and manage MSSQL databases.</li>
                </ul>
              }
              ghLink="https://github.com/awaazo/awaazo"
              details={{
                techStack: ["React", "Redux", "C#", ".NET Core", "MSSQL", "Entity Framework"],
                skills: ["State management", "REST API development", "Audio transcription with AI", "Database design"],
                features: ["Podcast creation", "User auth", "Transcription", "Subtitles"],
                projectSummary: "A podcasting platform enabling users to create, upload, and transcribe their episodes using AI.",
                challengesSolved: ["Handling audio upload size", "Subtitle sync with audio"],
                demoVideoUrl: "https://your-demo-link.com/awaazo"
              }}
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NeuroNote}
              isBlog={false}
              title="Neuronote"
              description={
                <ul>
                  <li>Our app aims to simulate taking input from an EEG device to convert brain signal into music, allowing users to choose their preferred instrument from a list of options.</li>
                  <li>Designed dynamic, user-friendly single-page applications using React.</li>
                  <li>Created and managed an SQL database using Sequelize and Express.js.</li>
                  <li>Utilised PostMan and Swagger to test and document RESTful APIs.</li>
                </ul>
              }
              ghLink="https://github.com/rogersi9/NeuroNote"
            details={{
              techStack: ["React", "Node.js", "Express", "Sequelize", "PostgreSQL", "Swagger", "Postman"],
              skills: ["Brain signal simulation", "Music generation mapping", "Backend APIs", "Postman + Swagger usage"],
              features: ["EEG input simulation", "Instrument selection", "Live preview"],
              projectSummary: "Converts brainwave patterns (simulated EEG data) into musical outputs using chosen instruments.",
              challengesSolved: ["Mapping signals to music", "Backend data sync"],
              demoVideoUrl: "https://your-demo-link.com/neuroneote"
            }}

            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WiFi}
              isBlog={false}
              title="Movement Detection"
              description={
                <ul>
                  <li>This app is used to detect device movement by calculation the wifi signal strength and the distance between the device and the wifi router.
                     It monitors RSSI and dbm values to detect the movement of the device.</li>
                  <li>Utilised Java and Android Studio to develop the app.</li>
                  <li>Implemented a machine learning algorithm to predict the device movement.</li>
                </ul>
              }
              ghLink="https://github.com/Ahed752/WifiLocation-SOEN-321"
              details={{
                techStack: ["Java", "Android Studio", "MLKit"],
                skills: ["RSSI & dBm signal tracking", "Movement prediction via ML", "Android UI design"],
                features: ["Wi-Fi signal analysis", "Movement classification", "ML model integration"],
                projectSummary: "Mobile app that uses WiFi signal strength to predict and track user movement indoors.",
                challengesSolved: ["Accurate movement detection", "Noise filtering in RSSI"],
                demoVideoUrl: "https://your-demo-video-url.com/movement.mp4"
              }}

              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SkillSwipe}
              isBlog={false}
              title="SkillSwipe"
              description={
                <ul>
                  <li>This App is similar to Linkedin where users can create their profile and connect with other users. Users can also post jobs and apply for jobs.</li>
                  <li>Implemented search algorithms to match users with job postings based on their skills and preferences using Python and Django.</li>
                </ul>
              }
              ghLink="https://github.com/Marc-Eid/SkillSwipe"
              details={{
                techStack: ["Next.js", "TypeScript", "Chakra UI", "Custom Express API"],
                skills: ["Authentication flow", "Notification system", "Profile page design", "Frontend-backend integration"],
                features: ["Job matching", "User profiles", "Job posting & applications", "Notifications"],
                projectSummary: "A career networking app similar to LinkedIn with job matching features and custom profiles.",
                challengesSolved: ["User-skill-based job matching", "Frontend ↔ backend API sync"],
                demoVideoUrl: "https://your-demo-video-url.com/skillswipe"
              }}

          />
        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce"
              description={
                <ul>
                  <li>This App is an e-commerce platform where users can buy and sell products. Users can also create their own store and manage their products.</li>
                  <li>Optimised MSSQL databases with effective schemas and stored procedures for complex queries.</li>
                  <li>Developed secure RESTful APIs in C# and .NET Core, focusing on authentication, data processing, and CRUD operations.</li>
                  <li>Utilised JavaScript and React to create dynamic, user-friendly single-page applications.</li>
                </ul>
              }
              details={{
                techStack: ["JavaScript", "HTML", "CSS", "Stripe API"],
                skills: ["Payment integration", "Client-side filtering", "Frontend cart logic"],
                features: ["Product filtering", "Stripe payment", "Cart management", "Store creation"],
                projectSummary: "A full e-commerce platform with user shops, Stripe payments, and filtering logic.",
                challengesSolved: ["Handling secure payment", "Dynamic product filtering"],
                demoVideoUrl: "https://your-demo-video-url.com/ecommerce"
              }}

              ghLink="https://github.com/raccoonrick/SOEN341"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Face}
              isBlog={false}
              title="Face Recognition and Mask Detection"
              description={
                <ul>
                  <li>The purpose of this app is to detect the face in an image and then predict the emotion of a person. The app also detects if a person is wearing a mask or not.</li>
                  <li>Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 87.1%.</li>
                  <li>Used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person..</li>
                </ul>
              }
              ghLink="https://github.com/Ahed752/Face_And_Emotion_Detection" 
              details={{
                techStack: ["TensorFlow", "Keras", "OpenCV", "React (frontend)", "Python (backend)"],
                skills: ["Real-time emotion recognition", "Custom dataset creation", "Mask detection via CNN"],
                features: ["Live webcam detection", "Emotion prediction", "Mask status classification"],
                projectSummary: "Web app to detect face emotions and mask usage using real-time webcam input.",
                challengesSolved: ["Training model on small custom dataset", "Ensuring real-time performance"],
                demoVideoUrl: "https://your-demo-video-url.com/facemask"
              }}


            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
