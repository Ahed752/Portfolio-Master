import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WiFi from "../../Assets/Projects/WiFi.jpeg";
import Awaazo from "../../Assets/Projects/Awaazo.jpeg";
import NeuroNote from "../../Assets/Projects/NeuroNote.webp";
import SkillSwipe from "../../Assets/Projects/SkillSwipe.jpeg";
import Ecommerce from "../../Assets/Projects/Ecommerce.jpeg"
import Face from "../../Assets/Projects/FaceRecognition.jpeg"

function Projects() {
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1
          className="project-heading"
          dangerouslySetInnerHTML={{ __html: t("projectsSection.heading") }}
        />
        <p style={{ color: "white" }}>{t("projectsSection.intro")}</p>
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
                skills: ["State management", "REST API development", "Audio transcription with AI", "Database design", "Microservices architecture", "Caching techniques"],
                features: ["Podcast creation", "User auth", "Transcription", "Subtitles", "Audio synchronization"],
                projectSummary: "A podcasting platform enabling users to create, upload, and transcribe their episodes using AI. The platform helps bridge the gap for content creators who need automated transcription and more accessible podcast content.",
                challengesSolved: [
                  "Handling large audio file uploads efficiently",
                  "Ensuring smooth subtitle synchronization with audio",
                  "Scaling the transcription service to handle multiple podcasts simultaneously",
                  "Ensuring a secure authentication process for users"
                ],
                scenario: `Awaazo's biggest challenge was dealing with the large file sizes of podcasts, which led to timeouts and slow processing of transcriptions. These issues were especially prevalent with longer episodes that could range from 1-3 hours.`,
                solution: `To resolve this, I broke the audio files into smaller chunks of 5MB each. These smaller chunks could then be processed in parallel by the transcription service, ensuring that each part of the audio file was transcribed independently. We also used an AI transcription API optimized for large audio files to further improve transcription speed and accuracy.`,
                codeSnippet: `// C# Code to transcribe audio file in chunks with retry logic
            public string TranscribeAudioInChunks(string audioFilePath) {
                var audioContent = File.ReadAllBytes(audioFilePath);
                var chunkSize = 5000000; // 5MB per chunk
                var chunkCount = (int)Math.Ceiling((double)audioContent.Length / chunkSize);
                var transcription = "";

                for (int i = 0; i < chunkCount; i++) {
                    var chunk = audioContent.Skip(i * chunkSize).Take(chunkSize).ToArray();
                    string chunkTranscription = aiService.Transcribe(chunk);

                    // Retry mechanism if transcription fails
                    int retries = 3;
                    while (string.IsNullOrEmpty(chunkTranscription) && retries > 0) {
                        chunkTranscription = aiService.Transcribe(chunk);
                        retries--;
                    }

                    transcription += chunkTranscription;
                }

                return transcription;
            }`,
                demoVideoUrl: "https://your-demo-link.com/awaazo",
                systemArchitecture: `Awaazo uses a microservices architecture to handle different parts of the application independently. The transcription service, backend API, and user management are all separate services that communicate through REST APIs. Kubernetes and Docker are used to containerize each service, ensuring seamless scaling and deployment.`,
                performanceOptimization: `The platform was optimized by implementing a caching layer for frequently accessed podcast data. We also horizontally scaled the transcription service to handle multiple transcription requests simultaneously. By using Kubernetes and Docker, we ensured that the system could scale with the increasing user base without performance degradation.`,
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
                <li>Our app simulates taking input from an EEG device to convert brain signals into music, allowing users to choose their preferred instrument from a list of options.</li>
                <li>Designed dynamic, user-friendly single-page applications using React.</li>
                <li>Created and managed an SQL database using Sequelize and Express.js.</li>
                <li>Utilized Postman and Swagger to test and document RESTful APIs.</li>
              </ul>
            }
            ghLink="https://github.com/rogersi9/NeuroNote"
            details={{
              techStack: ["React", "Node.js", "Express", "Sequelize", "PostgreSQL", "Swagger", "Postman"],
              skills: ["Brain signal simulation", "Music generation mapping", "Backend APIs", "Postman + Swagger usage"],
              features: ["EEG input simulation", "Instrument selection", "Live preview"],
              projectSummary: "Neuronote converts brainwave patterns (simulated EEG data) into musical outputs using chosen instruments. The app offers a unique way to experience the connection between brain activity and music.",
              challengesSolved: [
                "Mapping brainwave signals to musical notes",
                "Backend data synchronization between EEG input and live preview",
                "Ensuring real-time data handling and visualization",
              ],
              scenario: `The main challenge for Neuronote was to create a seamless experience where EEG brainwave signals could be mapped to a musical instrument in real time. This required quick data processing and synchronization of multiple inputs.`,
              solution: `We used a combination of signal processing algorithms to convert EEG input into a set of parameters that mapped to specific musical notes. The data was then passed to the frontend in real-time using WebSockets for instant updates.`,
              codeSnippet: `// Signal mapping from EEG input to musical notes
          function mapEEGToMusic(eegSignal) {
            const noteFrequency = eegSignal * 100; // Example transformation logic
            return noteFrequency;
          }`,
              demoVideoUrl: "https://your-demo-link.com/neuroneote",
              systemArchitecture: "The app follows a client-server architecture where the client (React) communicates with the backend (Node.js) to process EEG data and map it to musical notes. Real-time updates are achieved through WebSockets.",
              performanceOptimization: "We used Sequelize for efficient database querying and optimized data processing on the backend. Real-time updates were ensured by using WebSockets, which allowed for instant feedback between the EEG input and the music output."
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
                  <li>This app detects device movement by calculating the Wi-Fi signal strength and the distance between the device and the Wi-Fi router.</li>
                  <li>Utilized Java and Android Studio to develop the app.</li>
                  <li>Implemented a machine learning algorithm to predict the device's movement.</li>
                </ul>
              }
              ghLink="https://github.com/Ahed752/WifiLocation-SOEN-321"
              details={{
                techStack: ["Java", "Android Studio", "MLKit"],
                skills: ["RSSI & dBm signal tracking", "Movement prediction via ML", "Android UI design"],
                features: ["Wi-Fi signal analysis", "Movement classification", "ML model integration"],
                projectSummary: "The app tracks the movement of devices using Wi-Fi signal strength and RSSI (Received Signal Strength Indicator), providing insights into indoor movement.",
                challengesSolved: [
                  "Accurate movement detection using fluctuating Wi-Fi signals",
                  "Noise filtering in RSSI data",
                  "Optimizing machine learning model for real-time predictions"
                ],
                scenario: `Wi-Fi signals fluctuate in strength depending on environmental conditions, making movement detection tricky. The primary challenge was to distinguish between normal signal fluctuations and actual movement.`,
                solution: `We filtered the noise in the RSSI data by applying a moving average filter and then trained a machine learning model to detect patterns indicative of movement. The model used features like signal strength changes and distances between the device and the router.`,
                codeSnippet: `// Example code for filtering RSSI values
            public double filterNoise(double[] signalData) {
                double sum = 0;
                for (double signal : signalData) {
                    sum += signal;
                }
                return sum / signalData.length;
            }`,
                demoVideoUrl: "https://your-demo-video-url.com/movement.mp4",
                systemArchitecture: "The app uses an Android-based architecture where the client-side (Android Studio) collects the Wi-Fi signal data, processes it, and sends it to the device for movement classification using MLKit.",
                performanceOptimization: "The algorithm was optimized by reducing the number of data points processed for each prediction. We implemented a background service to collect Wi-Fi data continuously without affecting app performance."
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
                  <li>This app is similar to LinkedIn, where users can create profiles, connect with others, post jobs, and apply for jobs.</li>
                  <li>Implemented search algorithms to match users with job postings based on their skills and preferences using Python and Django.</li>
                </ul>
              }
              ghLink="https://github.com/Marc-Eid/SkillSwipe"
              details={{
                techStack: ["Next.js", "TypeScript", "Chakra UI", "Custom Express API"],
                skills: ["Authentication flow", "Notification system", "Profile page design", "Frontend-backend integration"],
                features: ["Job matching", "User profiles", "Job posting & applications", "Notifications"],
                projectSummary: "SkillSwipe is a career networking app designed to match users with job opportunities based on their skills and preferences. It offers both job seekers and employers a unique platform for networking and job matching.",
                challengesSolved: [
                  "Matching users with jobs based on skills and preferences",
                  "Ensuring seamless integration between the frontend and backend",
                  "Designing a responsive and user-friendly interface"
                ],
                scenario: `The main challenge was creating an intelligent job-matching algorithm that considered a user's skills and preferences in real-time. It needed to provide meaningful matches based on the job description and user profile.`,
                solution: `We used a collaborative filtering algorithm to recommend jobs based on user profiles and their interactions with job listings. The algorithm was trained to match users with jobs based on their skillset, work experience, and preferences.`,
                codeSnippet: `// Example of job matching algorithm
            function matchJob(userSkills, jobSkills) {
                return userSkills.filter(skill => jobSkills.includes(skill));
            }`,
                demoVideoUrl: "https://your-demo-video-url.com/skillswipe",
                systemArchitecture: "SkillSwipe follows a client-server architecture where the frontend (Next.js) communicates with the backend (Express API) to process job matches, handle user data, and provide job recommendations.",
                performanceOptimization: "We optimized the matching algorithm by caching results for frequently searched job listings and users. We also used lazy loading for job descriptions and profiles to improve initial load times."
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
                  <li>This app is an e-commerce platform where users can buy and sell products. Users can also create their own stores and manage their products.</li>
                  <li>Optimized MSSQL databases with effective schemas and stored procedures for complex queries.</li>
                  <li>Developed secure RESTful APIs in C# and .NET Core, focusing on authentication, data processing, and CRUD operations.</li>
                  <li>Utilized JavaScript and React to create dynamic, user-friendly single-page applications.</li>
                </ul>
              }
              ghLink="https://github.com/raccoonrick/SOEN341"
              details={{
                techStack: ["JavaScript", "HTML", "CSS", "Stripe API"],
                skills: ["Payment integration", "Client-side filtering", "Frontend cart logic"],
                features: ["Product filtering", "Stripe payment", "Cart management", "Store creation"],
                projectSummary: "This e-commerce platform allows users to create stores, list products for sale, and manage orders. It integrates secure payment systems and product filtering for a smooth shopping experience.",
                challengesSolved: [
                  "Handling secure payment transactions with Stripe",
                  "Implementing dynamic product filtering for user convenience",
                  "Managing cart functionality for users"
                ],
                scenario: `The main challenge was implementing a secure and seamless payment system that could handle high volumes of transactions without compromising security. The platform also needed a dynamic filtering system to help users find products easily.`,
                solution: `We integrated the Stripe API for handling secure payments and ensured that all transactions were encrypted. For the product filtering, we used advanced client-side filtering techniques to ensure smooth user interactions even with a large product catalog.`,
                codeSnippet: `// Example of filtering products by price
            function filterProductsByPrice(products, minPrice, maxPrice) {
                return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
            }`,
                demoVideoUrl: "https://your-demo-video-url.com/ecommerce",
                systemArchitecture: "The e-commerce platform follows a monolithic architecture where the frontend and backend are tightly coupled. The backend is responsible for handling all CRUD operations, while the frontend (React) manages the user interface.",
                performanceOptimization: "We used database indexing to optimize query performance, particularly for product searches and filtering. We also optimized the cart logic to handle large numbers of items in the shopping cart without slowing down the page."
              }}
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Face}
              isBlog={false}
              title="Face Recognition and Mask Detection"
              description={
                <ul>
                  <li>The app detects faces in images and predicts the emotion of a person. It also detects if a person is wearing a mask.</li>
                  <li>Trained a CNN classifier using the 'FER-2013 dataset' with Keras and TensorFlow.</li>
                  <li>Used OpenCV to detect faces in images and then passed them to the classifier for emotion prediction.</li>
                </ul>
              }
              ghLink="https://github.com/Ahed752/Face_And_Emotion_Detection"
              details={{
                techStack: ["TensorFlow", "Keras", "OpenCV", "React (frontend)", "Python (backend)"],
                skills: ["Real-time emotion recognition", "Custom dataset creation", "Mask detection via CNN"],
                features: ["Live webcam detection", "Emotion prediction", "Mask status classification"],
                projectSummary: "A web app that uses deep learning to detect faces and predict emotions in real-time. The app also detects whether a person is wearing a mask, addressing real-world needs during the pandemic.",
                challengesSolved: [
                  "Training a CNN model on a custom dataset",
                  "Ensuring high accuracy in real-time emotion detection",
                  "Handling small custom datasets for training"
                ],
                scenario: `The main challenge was ensuring real-time performance while accurately detecting emotions and mask status. Training a model on a small dataset proved difficult as it lacked enough diversity for robust predictions.`,
                solution: `We applied data augmentation techniques to expand our custom dataset and used transfer learning to leverage pre-trained models. The real-time webcam detection was achieved using OpenCV for face detection and TensorFlow.js for emotion recognition.`,
                codeSnippet: `// Example of face detection using OpenCV
            let faceCascade = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);
            let faces = faceCascade.detectMultiScale(image, 1.1, 3, 0, new cv.Size(30, 30));
            `,
                demoVideoUrl: "https://your-demo-video-url.com/facemask",
                systemArchitecture: "The app is based on a client-server architecture with React as the frontend and Python (Flask) as the backend. OpenCV is used for face detection, and TensorFlow/Keras is used for emotion and mask detection.",
                performanceOptimization: "To optimize real-time performance, we used **WebAssembly** for TensorFlow.js, which significantly improved the speed of face and emotion detection on the client-side. Additionally, we optimized face detection by using Haar Cascades for fast object recognition."
              }}
            />

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
