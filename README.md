# The Mumbling Murlocs - Part A Questionnaire

![alt text](https://github.com/nicdevlin/frontend-ordering-app/blob/master/images/murloc.png)

**1. Who is your client?**

Our client is Anthony Goddard, an entrepreneur.



**2.What is your client&#39;s need (i.e. challenge) that you will be addressing in your project?**

Creating a generic business to business ordering platform that will fit into any retail/services company model and will remove the requirement for email/phone orders.



**3. Describe the client&#39;s current setup and data.**

The target client would either have an existing phone/emails order setup or an outdated ticketing/job system that doesn&#39;t fit their company requirements.



**4. Describe the project will you be conducting and how your App will address the client&#39;s needs.**

The client will save countless wasted hours spent on the phone due to the app removing the requirement of phone orders. This app will allow a supplier to create an account, add their products avknd invite their customers to signup and place orders. These orders will be scheduled for delivery on a selected date. Suppliers will also be able to log on to a portal to check and process orders.



**5. Identify and describe the software (including databases) to be used in your App.**

We will be using the MERN tech stack for our app.

For our front end, we will be utilising React due to its component based flexibility, local routing, scalability and performance. Also the use of JSX makes writing HTML components in Javascript straightforward and easy to manipulate. The component based natured of React will make separating concerns and maintenance of different features a lot easier.

For backend we will be using NodeJS, Express and MongoDB.

We are using the NodeJS framework for its highly customizable package options and its very modular codebase. Express will be used as the main web server component for Node and MongoDB will be used for its ease of scalability.

MongoDB for its flexibility with collections and rapidly prototype apps. We will also be using Mongoose in conjunction with MongoDB to create a structured schema for our DB.



**6. Identify and describe the network setup you will use in your development.**

Each function of our app will be split over several services for redundancy and separation of concerns. The front-end (React) and back-end(NodeJS &amp; Express) will each be hosted within their own instances on Heroku, and the MongoDB database instance will be hosted with mLab&#39;s. During development these services will be setup in a localhost environment on our local machines.



**7. Identify and describe the infrastructure (i.e. hardware) that your App will run on.**

### Server Infrastructure

For server side hardware, we will be using the hardware that our cloud vendors Heroku and mLabs have commissioned from AWS.

### Client Infrastructure

For client side hardware, the devices accessing our app will be smartphones, tablets, laptops and desktop PCs that run todays latest web browsers.



**8. Describe the architecture of your App.**

The diagram below describes the architecture of the app.

The backend is a restful api that takes client side requests, passes the request through any middleware to check things like authentication or authorization and queries the database. The database then sends back the queried data to the back end which in turn passes the data to the front end as a response to the request.

![alt text](https://github.com/nicdevlin/frontend-ordering-app/blob/master/images/arch.jpg)



**9. Explain the different high-level components (abstractions) in your App.**

The diagram below shows the high-level abstractions contained within the app. The main components are vendor and supplier.

Vendors can have many suppliers and suppliers can have many vendors.

Suppliers have many products.

A vendor can send multiple orders chosen from a list of products to suppliers who in turn receive them for their order delivery set (Order set defined by their delivery schedule, e.g. thursday delivery).

E.g. Vendor A creates an order from selected items from Supplier A. They then create another order for items from Supplier B. Meanwhile, Vendor B only orders from vendor A. Supplier A receives orders from both Vendor A and B which have been collected in a list of orders (order set), whilst vendor B only receives the order from Vendor A.

![alt text](https://github.com/nicdevlin/frontend-ordering-app/blob/master/images/high.png)



**10. Detail any third party services that your App will use.**

This is the list for planned third party services for use with our app including description.

Domain Name &amp; DNS Hosting - Namecheap.com

A domain name will be purchased from Namecheap and all DNS management will be done here.

LetsEncrypt SSL Certificates - Letsencrypt.org

An SSL certificate for our front end React instance will be generated using this free 3rd party utility.

React Instance Hosting - Heroku.com

A free dyno plan will be used for our React instance and connected to our domain name from Namecheap via a CNAME DNS entry.

NodeJS &amp; Express Instance Hosting - Heroku.com

Another free dyno plan will be used for our Node and Express instance to handle API queries from our React instance.

MongoDB Instance Hosting - Mlab.com

A free tier plan from mLabs will be used to give our Node and Express instance a MongoDB instance to save data too.



**11. Identify the database to be used in your app and provide a justification for your choice.**

The database system we will be using in our app is MongoDB, this option was chosen as it is best suited for rapid growing businesses due to its sharding feature. This allows MongoDB to split its load over several hosts quickly and painlessly when companies need to scale.



**12.Discuss the database relations to be implemented.**

As we are using a NoSQL database, there are no relationships by default. However we will be using Mongoose as a package via NodeJS to implement a schema with validation.



**13.Provide your database schema design.**

Please see image below for our schema layout.

![alt text](https://github.com/nicdevlin/frontend-ordering-app/blob/master/images/schema.jpg)



**14.Provide User stories for your App.**

Please see our Trello board link [here](https://trello.com/b/d6eDsOWU) for our comprehensive list of user stories.



**15. Provide Wireframes for your App.**

Please see our Figma board [here](https://www.figma.com/file/TMGBdx8vk0HbVzOJrajTApJ9/B2B-Ordering-Platform) for our detailed wireframes.



**16. Describe the way Tasks are being allocated and tracked in your project.**

As a group we have elected one of our group members to be the project manager, this position is tasked with allocating User Stories/Tasks to group members. Tasks are tracked and managed within our Trello portal, this contains all the intricate details required for each task.



**17. Discuss how Agile methodology is being implemented in your App.**

Agile methodology will be implemented into our app by having stand up sessions every morning to discuss each members tasks for the day and any issues they are currently stuck on.

We are using a Trello board with user stories for delegation of tasks between us, for the coding process we will be splitting our user stories into sprints that are 2 days in length. After a sprint is finished, we will get together to review and provide group feedback on the work completed.



**18. Provide an overview and description of your Source control process.**

The service we have chosen to use for Source Control is GitHub, as its free and extremely popular. Our process is our Project Manager creates our initial repo, which all of us as team members create a fork of. We all work on our own forks of the original repo, and create pull requests for any work we complete. This is then reviewed by the Project Manager and committed once verified.



**19. Provide an overview and description of your Testing process.**

We are implementing a test driven development (TDD) approach towards our app, we will be utilising NodeJS packages such as Chai, ChaiHTTP and Mocha for this process. Mocha will be used as our test runner, Chai for assertion of our tests and ChaiHTTP to integrate API/Server runtime testing.

For continuous integration testing we will be using TravisCI to push small chunks of code to our github repo and have the code autonomously built and tested for any errors.

We will be using Jest for frontend testing, this is a zero-configuration test platform for React.



**20. Discuss and analyse requirements related to information system security.**

A few key requirements for our system security include but are not limited too, passwords that are stored in our databases are hashed and salted. Connections from client browsers to our React front-end instance will be encrypted via SSL and our backend API will only be accessible from our front-end instance with valid JWT tokens.



**21. Discuss methods you will use to protect information and data.**

Our app will collect and store minimal information on users, any information that is collected will be encrypted and stored safely on reputable cloud hosting providers. Any critical and important security updates for our hosting environments will be completed ASAP while ensuring minimal downtime.



**22. Research what your legal obligations are in relation to handling user data.**

Our legal obligations in relation to handling user data requires us to abide by the [Privacy Act of 1988](https://www.oaic.gov.au/privacy-law/). This means we by law we need to store any sensitive personal data collected in a secure and encrypted manner. Any breach of our databases/system will require us to adhere to the The Notifiable Data Breaches (NDB) scheme under Part IIIC of the [Privacy Act of 1988](https://www.oaic.gov.au/privacy-law/).