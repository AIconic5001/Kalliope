# Milestones for the project Kalliope:
**Project Kalliope**: Web application to streamline literature discovery and application, helping users efficiently navigate the vast research landscape.
**Duration**: 2 semesters
**Team**: 
  - Huu Quang Nhat Nguyen (Team Leader): nguye2hq@mail.uc.edu (Computer Science) (Software Engineer)
  - Du Quang Nguyen: nguye2d6@mail.uc.edu (Computer Science) (AI Engineer)
  - Huy Phong Le: leh8@mail.uc.edu (Computer Science) (Data Engineer)
  - Nhat Minh Phan: mr.phanminhnhat@gmail.com (Computer Science) (Data Engineer)

**Work Methodology**: Agile (each iteration lasts 2 week)


## List of Major milestones:
#### Project Initiation and Planning
- Kick-off Meeting & Initial Planning: Team formation, project scope definition, ideation of the application’s features, initial data flow design, and legal research.
- *Deliverables*: Team contract, project plan, data flow diagram, initial system architecture.
#### Design Phase
- System & User Design: Comprehensive design of the system architecture
- *Deliverables*:  System design document, user profiles, wireframes, frontend, backend architecture.
#### Preparation & AI Model Development
- Preparation: Identify sources of academic papers, handle data licensing.
- AI Model Design & Fine-Tuning AI Model: Fine-tune the AI model to accurately generate research paper summaries and other insights.
- *Deliverables*:   Dataset for training, AI output structure, initial training data, Fine-tuned AI model.
#### Backend Development
- Backend Infrastructure Setup
- Data Processing Pipelines (ETL): Implement pipelines for data extraction, transformation, and loading 
- API Development: Create and document backend APIs for integration with the front end
- *Deliverables*: Backend service, database schema, ETL pipeline, API documentation.
#### Frontend Development
- Frontend Infrastructure Setup
- UI/UX Implementation: Design and develop an UI that are user-friendly and concise to the purpose of the webpage
- *Deliverables*: Initial frontend framework, core UI components (e.g., login, upload features), web application prototype.
#### Data Collection and Analysis
- Collecting data for data sets
- NLP System Development: Build an NLP system to extract and process information (title, authors, abstract, citations)
- Data Visualization: Visualize Data for more insights and analysis
#### Deployment and Release
- Deployment on Cloud Infrastructure
- Alpha and Beta Release
#### Finalization and Documentation

## Deatiled Timeline
## 1, Project Initiation (Iteration 1 & 2):
#### Iteration 1: (9/6 - 19)
  - Kick off Meeting 
    - Ideation & Drafting the data flow & Team formation and Project launch
    - Deliverables: All features and sub-features in the web application (alpha 1); Github repo shared among team members; team contract
  - Dataset and Paper Copyright legality 
    - Research about all the licenses when using free-source papers in training our AI model
    - Deliverables: Legality of using all the papers in traning all AI model
#### Iteration 2: (9/20 - 10/3)
  - User and System Design :
    -  Research about the potential users and design the data flow as well as diagram for the whole application from backend to frontend 
    -  Deliverables: User profiles and Design Diagram for the system
  - Reach out for Professor Advisor:
    - Reach out to find suitable professor for the team
    - Deliverables: Get the prof's response
## 2, Development (Iteration 3 - 7):
#### Iteration 3: (10/4 - 10/17)
  - AI Domain: AI model's output structure 
    - Design the structure of the output from the AI Model after processing on the user's paper 
    - Deliverables: Dataset structure (including names of columns in the output structure)
  - Data Domain: Retrieving text from a pdf file 
    - Build a snippet of codes to retrieve text from pdf files
    - Deliverables: Demo of this functionality to the team 
  - Software Domain: Back end
    - Research Back-end Tech Stack & Specify data sources for academic papers, including public databases and APIs to ensure comprehensive coverage of relevant literature
    - Deliverables: Tech Stack used in BE Dev and data sources
  - Software Domain: Front End
    -   Basic framework and directory set up
    -   Deliverables: Front-End Directory Set up
#### Iteration 4: (10/18 - 10/31)
  - AI Domain: Prompt Feeding to chat GPT and starting to collect data for training and testing
    - Finalize the Prompt and start feed papers to the GPT to collect data for training and testing 
    - Deliverables: A extracted Data from 100 papers for training and testing
  - Data Domain: Document Validation
    - Validate the uploaded document's structure and content to ensure it meets the required format for accurate processing and date extraction.
    - Deliverables: A Program that validate the format of those fed document
  - Software Domain: Back end
    - Design & develop the Data schema (after getting the output structure from the AI model) 
    - Deliverables: Data schema for databases
  - Software Domain: Front End
    -   Design UI: Create wireframes and mockups of the app's layout.
    -   Deliverables: UI design for the web page
#### Iteration 5: (11/1 - 11/14)
- AI Domain: Find suitable GPT model to fine-tune & Start fine-tuning the model 
  - Decide on which model to be used and develop appropriate fine-tune method to achieve accurate generation of research paper synopsis
  - Deliverables: the AI model to be trained and plan to fine tune 
- Data Domain: NLP-based System Development
  - Develop an NLP-based system to extract key information from the uploaded papers, such as title, authors, abstract, keywords, and publication date.
  - Deliverables: NLP-based System Demo & updates
- Software Domain: Back end
  - Design ETL processes to extract, cleanse, and transform academic paper data, ensuring consistency, accuracy, and deduplication before storage in the database.
  - Deliverables: ETL Process demo
- Software Domain: Front End
  -   Build Core Features and Components: Create essential UI components (e.g., buttons, forms, navigation bars) and integrate functionality (e.g., state management).
  -   Deliverables: Landing Page + Sign-in Options + Citation Page demo 
#### Iteration 6: (11/15 - 11/28)
- AI Domain: Continue of Fine-tuning the Model
  - Continue on fine-tuning the model to achieve accurate generation of research paper synopsis
  - Deliverables: Updates on features and status of the training the model
- Data Domain: Data Visualization from fed paper
  - Implement a visualization system to display the recency of referenced papers, using options like a timeline, bar chart, or scatter plot, allowing users to quickly understand the publication dates.
  - Deliverables: Visualization demo 
- Software Domain: Back end
  - Develop Python-based pipelines using tools like PySpark and Pandas for scalable processing of large datasets to handle metadata, citations, and NLP-generated summaries.
  - Deliverables: Python Pipelines for Data Demo 
- Software Domain: Front End
  -   Build Core Features and Components: Create essential UI components (e.g., buttons, forms, navigation bars) and integrate functionality (e.g., state management).
  -   Deliverables: Main Page Demo (where users update and receive the synopsis and interact with other options)
#### Iteration 7: (11/29 - 12/12)
- AI Domain: Completed the fine-tuning process and start feeding it with training dataset
  - Finalize on fine-tuning the model and training
  - Deliverables: A demo of the functionality of the model and feedbacks
- Data Domain: Finalizing the whole model and bug fix (if any)
  - Bring all parts of the feature and together and testing on 2-3 papers 
  - Deliverables: Testing & demo of the feature
- Software Domain: Back end
  - Obtain real-time updates from selected paper repositories and ensure that the data ingestion process can handle ongoing additions and changes in academic publications.
  - Deliverables: Real-time updates feature demo (connecting with model) 
- Software Domain: Front End
  -   Integrate API or Backend Services: Connect the front-end with the backend API for data fetching and manipulation.
  -   Deliverables: Demo all functionalities of the website 

## 3, Deployment, Testing and Fixing:

- Deploy the web application on cloud server
- Functionality Testing and Bug Fixing
- Updates on status
- Deliverables: Alpha 1.0 Version Release

## 4, Finalization and Documentation:
- Update and release Beta 1.0
- Documentation about the app and collecting feedback


#### Timeline Table
![image](https://github.com/user-attachments/assets/50301752-5278-4712-b129-6ea2195330ce)


####  Effort Matrix:
![image](https://github.com/user-attachments/assets/9e2318b8-aeab-4ca5-8fa3-1588d6a5b47a)

