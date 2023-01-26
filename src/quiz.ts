export const quiz = {
  "quizTitle": "Amazon AWS Certified Cloud Practitioner",
  "quizSynopsis": "Domande esempio per l'esame",
  "nrOfQuestions": "280",
  "questions": [
    {
      "question": "A company is planning to run a global marketing application in the AWS Cloud. The application will feature videos that can be viewed by users. The company must ensure that all users can view these videos with low latency.\nWhich AWS service should the company use to meet this requirement?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "AWS Auto Scaling",
        "Amazon Kinesis Video Streams",
        "Elastic Load Balancing",
        "Amazon CloudFront"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Sei una pippa, riprova!",
      "explanation": "The best option for the company to ensure that users can view videos with low latency would be to use Amazon CloudFront. CloudFront is a content delivery network (CDN) that speeds up the delivery of static and dynamic web content, such as HTML, CSS, JavaScript, and images, as well as videos.",
      "point": "20"
    },
    {
      "question": "Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Security",
        "Reliability",
        "Performance efficiency",
        "Cost optimization"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "explanation": "The reliability pillar focuses on workloads performing their intended functions and how to recover quickly from failure to meet demands. Key topics include distributed system design, recovery planning, and adapting to changing requirements.\n\nhttps://aws.amazon.com/architecture/well-architected/",
      "point": "20"
    },
    {
      "question": "Which of the following are benefits of migrating to the AWS Cloud? (Choose two.)",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Operational resilience",
        "Discounts for products on Amazon.com",
        "Business agility",
        "Increased staff retention"
      ],
      "correctAnswer": [
        1,
        3
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Sei una pippa, riprova!",
      "point": "20"
    },
    {
      "question": "A company is planning to replace its physical on-premises compute servers with AWS serverless compute services. The company wants to be able to take advantage of advanced technologies quickly after the migration.\nWhich pillar of the AWS Well-Architected Framework does this plan represent?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Security",
        "Performance efficiency",
        "Operational excellence",
        "Reliability"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
    {
      "question": "A large company has multiple departments. Each department has its own AWS account. Each department has purchased Amazon EC2 Reserved Instances.\nSome departments do not use all the Reserved Instances that they purchased, and other departments need more Reserved Instances than they purchased.\nThe company needs to manage the AWS accounts for all the departments so that the departments can share the Reserved Instances.\nWhich AWS service or tool should the company use to meet these requirements?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "AWS Systems Manager",
        "Cost Explorer",
        "AWS Trusted Advisor",
        "AWS Organizations"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Sei una pippa, riprova!",
      "point": "20"
    },
    {
      "question": "Which component of the AWS global infrastructure is made up of one or more discrete data centers that have redundant power, networking, and connectivity?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "AWS Region",
        "Availability Zone",
        "Edge location",
        "AWS Outposts"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Sei una pippa, riprova!",
      "point": "20"
    },
    {
      "question": "Which duties are the responsibility of a company that is using AWS Lambda? (Choose two.)",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Security inside of code",
        "Selection of CPU resources",
        "Patching of operating system",
        "Writing and updating of code",
        "Security of underlying infrastructure"
      ],
      "correctAnswer": [
        1,
        4
      ],
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "explanation": "Lambda runs your code on high availability compute infrastructure and performs all the administration of your compute resources. This includes server and operating system maintenance, capacity provisioning and automatic scaling, code and security patch deployment, and code monitoring and logging. All you need to do is supply the code. Ref:https://aws.amazon.com/lambda/features/",
      "point": "20"
    },
    {
      "question": "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Reserved Instances",
        "EC2 Amazon Machine Images (AMIs)",
        "Amazon Elastic Block Store (Amazon EBS) snapshots",
        "AWS Shield",
        "Amazon GuardDuty"
      ],
      "correctAnswer": [
        2,
        3
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Sei una pippa, riprova!",
      "point": "20"
    },
    {
      "question": "A company is migrating to the AWS Cloud instead of running its infrastructure on premises.\nWhich of the following are advantages of this migration? (Choose two.)",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Elimination of the need to perform security auditing",
        "Increased global reach and agility",
        "Ability to deploy globally in minutes",
        "Elimination of the cost of IT staff members",
        "Redundancy by default for all compute services"
      ],
      "correctAnswer": [
        2,
        3
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Sei una pippa, riprova!",
      "explanation": "The six advantages of cloud computing are:\n• Trade upfront expense for variable expense.\n• Benefit from massive economies of scale.\n• Stop guessing capacity.\n• Increase speed and agility. Yes B\n• Stop spending money running and maintaining data centers.\n• Go global in minutes. YES C",
      "point": "20"
    },
    {
      "question": "A user is comparing purchase options for an application that runs on Amazon EC2 and Amazon RDS. The application cannot sustain any interruption. The application experiences a predictable amount of usage, including some seasonal spikes that last only a few weeks at a time. It is not possible to modify the application.\nWhich purchase option meets these requirements MOST cost-effectively?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Review the AWS Marketplace and buy Partial Upfront Reserved Instances to cover the predicted and seasonal load.",
        "Buy Reserved Instances for the predicted amount of usage throughout the year. Allow any seasonal usage to run on Spot Instances.",
        "Buy Reserved Instances for the predicted amount of usage throughout the year. Allow any seasonal usage to run at an On-Demand rate.",
        "Buy Reserved Instances to cover all potential usage that results from the seasonal usage."
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Sei una pippa, riprova!",
      "point": "20"
    },
    {
      "question": "A company wants to review its monthly costs of using Amazon EC2 and Amazon RDS for the past year.\nWhich AWS service or tool provides this information?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Trusted Advisor",
        "B. Cost Explorer",
        "C. Amazon Forecast",
        "D. Amazon CloudWatch"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company wants to migrate a critical application to AWS. The application has a short runtime. The application is invoked by changes in data or by shifts in system state. The company needs a compute solution that maximizes operational efficiency and minimizes the cost of running the application.\nWhich AWS solution should the company use to meet these requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon EC2 On-Demand Instances",
        "B. AWS Lambda",
        "C. Amazon EC2 Reserved Instances",
        "D. Amazon EC2 Spot Instances"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS service or feature allows users to connect with and deploy AWS services programmatically?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Management Console",
        "B. AWS Cloud9",
        "C. AWS CodePipeline",
        "D. AWS software development kits (SDKs)"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company plans to create a data lake that uses Amazon S3.\nWhich factor will have the MOST effect on cost?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. The selection of S3 storage tiers",
        "B. Charges to transfer existing data into Amazon S3",
        "C. The addition of S3 bucket policies",
        "D. S3 ingest fees for each request"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company is launching an ecommerce application that must always be available. The application will run on Amazon EC2 instances continuously for the next\n12 months.\nWhat is the MOST cost-effective instance purchasing option that meets these requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Spot Instances",
        "B. Savings Plans",
        "C. Dedicated Hosts",
        "D. On-Demand Instances"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS service or feature can a company use to determine which business unit is using specific AWS resources?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Cost allocation tags",
        "B. Key pairs",
        "C. Amazon Inspector",
        "D. AWS Trusted Advisor"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company wants to migrate its workloads to AWS, but it lacks expertise in AWS Cloud computing.\nWhich AWS service or feature will help the company with its migration?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Trusted Advisor",
        "B. AWS Consulting Partners",
        "C. AWS Artifacts",
        "D. AWS Managed Services"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS service or tool should a company use to centrally request and track service limit increases?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Config",
        "B. Service Quotas",
        "C. AWS Service Catalog",
        "D. AWS Budgets"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which documentation does AWS Artifact provide?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon EC2 terms and conditions",
        "B. AWS ISO certifications",
        "C. A history of a company's AWS spending",
        "D. A list of previous-generation Amazon EC2 instance types"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which task requires using AWS account root user credentials?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Viewing billing information",
        "B. Changing the AWS Support plan",
        "C. Starting and stopping Amazon EC2 instances",
        "D. Opening an AWS Support case"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company needs to simultaneously process hundreds of requests from different users.\nWhich combination of AWS services should the company use to build an operationally efficient solution?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon Simple Queue Service (Amazon SQS) and AWS Lambda",
        "B. AWS Data Pipeline and Amazon EC2",
        "C. Amazon Kinesis and Amazon Athena",
        "D. AWS Amplify and AWS AppSync"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "What is the scope of a VPC within the AWS network?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. A VPC can span all Availability Zones globally.",
        "B. A VPC must span at least two subnets in each AWS Region.",
        "C. A VPC must span at least two edge locations in each AWS Region.",
        "D. A VPC can span all Availability Zones within an AWS Region."
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which of the following are components of an AWS Site-to-Site VPN connection? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. AWS Storage Gateway",
        "B. Virtual private gateway",
        "C. NAT gateway",
        "D. Customer gateway",
        "E. Internet gateway"
      ],
      "correctAnswer": [
        2,
        4
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company needs to establish a connection between two VPCs. The VPCs are located in two different AWS Regions. The company wants to use the existing infrastructure of the VPCs for this connection.\nWhich AWS service or feature can be used to establish this connection?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Client VPN",
        "B. VPC peering",
        "C. AWS Direct Connect",
        "D. VPC endpoints"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "According to the AWS shared responsibility model, what responsibility does a customer have when using Amazon RDS to host a database?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Manage connections to the database",
        "B. Install Microsoft SQL Server",
        "C. Design encryption-at-rest strategies",
        "D. Apply minor database patches"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "What are some advantages of using Amazon EC2 instances to host applications in the AWS Cloud instead of on premises? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. EC2 includes operating system patch management.",
        "B. EC2 integrates with Amazon VPC, AWS CloudTrail, and AWS Identity and Access Management (IAM).",
        "C. EC2 has a 100% service level agreement (SLA).",
        "D. EC2 has a flexible, pay-as-you-go pricing model.",
        "E. EC2 has automatic storage cost optimization."
      ],
      "correctAnswer": [
        4,
        5
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A user needs to determine whether an Amazon EC2 instance's security groups were modified in the last month.\nHow can the user see if a change was made?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Use Amazon EC2 to see if the security group was changed.",
        "B. Use AWS Identity and Access Management (IAM) to see which user or role changed the security group.",
        "C. Use AWS CloudTrail to see if the security group was changed.",
        "D. Use Amazon CloudWatch to see if the security group was changed."
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS service will help protect applications running on AWS from DDoS attacks?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon GuardDuty",
        "B. AWS WAF",
        "C. AWS Shield",
        "D. Amazon Inspector"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS service or feature acts as a firewall for Amazon EC2 instances?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Network ACL",
        "B. Elastic network interface",
        "C. Amazon VPC",
        "D. Security group"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "How does the AWS Cloud pricing model differ from the traditional on-premises storage pricing model?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS resources do not incur costs",
        "B. There are no infrastructure operating costs",
        "C. There are no upfront cost commitments",
        "D. There are no software licensing costs"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company has a single Amazon EC2 instance. The company wants to adopt a highly available architecture.\nWhat can the company do to meet this requirement?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Scale vertically to a larger EC2 instance size.",
        "B. Scale horizontally across multiple Availability Zones.",
        "C. Purchase an EC2 Dedicated Instance.",
        "D. Change the EC2 instance family to a compute optimized instance."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company's on-premises application deployment cycle was 3-4 weeks. After migrating to the AWS Cloud, the company can deploy the application in 2-3 days.\nWhich benefit has this company experienced by moving to the AWS Cloud?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Elasticity",
        "B. Flexibility",
        "C. Agility",
        "D. Resilience"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which of the following are included in AWS Enterprise Support? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. AWS technical account manager (TAM)",
        "B. AWS partner-led support",
        "C. AWS Professional Services",
        "D. Support of third-party software integration to AWS",
        "E. 5-minute response time for critical issues"
      ],
      "correctAnswer": [
        1,
        4
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A global media company uses AWS Organizations to manage multiple AWS accounts.\nWhich AWS service or feature can the company use to limit the access to AWS services for member accounts?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Identity and Access Management (IAM)",
        "B. Service control policies (SCPs)",
        "C. Organizational units (OUs)",
        "D. Access control lists (ACLs)"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company wants to limit its employees' AWS access to a portfolio of predefined AWS resources.\nWhich AWS solution should the company use to meet this requirement?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Config",
        "B. AWS software development kits (SDKs)",
        "C. AWS Service Catalog",
        "D. AWS AppSync"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "An online company was running a workload on premises and was struggling to launch new products and features. After migrating the workload to AWS, the company can quickly launch products and features and can scale its infrastructure as required.\nWhich AWS Cloud value proposition does this scenario describe?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Business agility",
        "B. High availability",
        "C. Security",
        "D. Centralized auditing"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which of the following are advantages of the AWS Cloud? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. AWS management of user-owned infrastructure",
        "B. Ability to quickly change required capacity",
        "C. High economies of scale",
        "D. Increased deployment time to market",
        "E. Increased fixed expenses"
      ],
      "correctAnswer": [
        2,
        3
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "AWS has the ability to achieve lower pay-as-you-go pricing by aggregating usage across hundreds of thousands of users.\nThis describes which advantage of the AWS Cloud?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Launch globally in minutes",
        "B. Increase speed and agility",
        "C. High economies of scale",
        "D. No guessing about compute capacity"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company has a database server that is always running. The company hosts the server on Amazon EC2 instances. The instance sizes are suitable for the workload. The workload will run for 1 year.\nWhich EC2 instance purchasing option will meet these requirements MOST cost-effectively?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Standard Reserved Instances",
        "B. On-Demand Instances",
        "C. Spot Instances",
        "D. Convertible Reserved Instances"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company is developing a mobile app that needs a high-performance NoSQL database.\nWhich AWS services could the company use for this database? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. Amazon Aurora",
        "B. Amazon RDS",
        "C. Amazon Redshift",
        "D. Amazon DocumentDB (with MongoDB compatibility)",
        "E. Amazon DynamoDB"
      ],
      "correctAnswer": [
        2,
        5
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. Patch the Amazon EC2 guest operating system.",
        "B. Upgrade the firmware of the network infrastructure.",
        "C. Apply password rotation for IAM users.",
        "D. Maintain the physical security of edge locations.",
        "E. Maintain least privilege access to the root user account."
      ],
      "correctAnswer": [
        2,
        4
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. They are stateless.",
        "B. They are stateful.",
        "C. They evaluate all rules before allowing traffic.",
        "D. They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic.",
        "E. They operate at the instance level."
      ],
      "correctAnswer": [
        1,
        4
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company has designed its AWS Cloud infrastructure to run its workloads effectively. The company also has protocols in place to continuously improve supporting processes.\nWhich pillar of the AWS Well-Architected Framework does this scenario represent?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Security",
        "B. Performance efficiency",
        "C. Cost optimization",
        "D. Operational excellence"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon Route 53",
        "B. Amazon Macie",
        "C. AWS Direct Connect",
        "D. AWS PrivateLink"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company needs to graphically visualize AWS billing and usage over time. The company also needs information about its AWS monthly costs.\nWhich AWS Billing and Cost Management tool provides this data in a graphical format?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Bills",
        "B. Cost Explorer",
        "C. AWS Cost and Usage Report",
        "D. AWS Budgets"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company wants to run production workloads on AWS. The company needs concierge service, a designated AWS technical account manager (TAM), and technical support that is available 24 hours a day, 7 days a week.\nWhich AWS Support plan will meet these requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Basic Support",
        "B. AWS Enterprise Support",
        "C. AWS Business Support",
        "D. AWS Developer Support"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which architecture design principle describes the need to isolate failures between dependent components in the AWS Cloud?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Use a monolithic design.",
        "B. Design for automation.",
        "C. Design for single points of failure.",
        "D. Loosely couple components."
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS services are managed database services? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. Amazon Elastic Block Store (Amazon EBS)",
        "B. Amazon S3",
        "C. Amazon RDS",
        "D. Amazon Elastic File System (Amazon EFS)",
        "E. Amazon DynamoDB"
      ],
      "correctAnswer": [
        3,
        5
      ],
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company is using the AWS Free Tier for several AWS services for an application.\nWhat will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage.",
        "B. AWS Support will contact the company to set up standard service charges.",
        "C. The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period.",
        "D. The company's AWS account will be frozen and can be restarted after a payment plan is established."
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company recently deployed an Amazon RDS instance in its VPC. The company needs to implement a stateful firewall to limit traffic to the private corporate network.\nWhich AWS service or feature should the company use to limit network traffic directly to its RDS instance?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Network ACLs",
        "B. Security groups",
        "C. AWS WAF",
        "D. Amazon GuardDuty"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS service uses machine learning to help discover, monitor, and protect sensitive data that is stored in Amazon S3 buckets?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Shield",
        "B. Amazon Macie",
        "C. AWS Network Firewall",
        "D. Amazon Cognito"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company wants to improve the overall availability and performance of its applications that are hosted on AWS.\nWhich AWS service should the company use?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon Connect",
        "B. Amazon Lightsail",
        "C. AWS Global Accelerator",
        "D. AWS Storage Gateway"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Service Catalog",
        "B. AWS Systems Manager",
        "C. AWS IAM Access Analyzer",
        "D. AWS Organizations"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company does not want to rely on elaborate forecasting to determine its usage of compute resources. Instead, the company wants to pay only for the resources that it uses. The company also needs the ability to increase or decrease its resource usage to meet business requirements.\nWhich pillar of the AWS Well-Architected Framework aligns with these requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Operational excellence",
        "B. Security",
        "C. Reliability",
        "D. Cost optimization"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company wants to launch its workload on AWS and requires the system to automatically recover from failure.\nWhich pillar of the AWS Well-Architected Framework includes this requirement?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Cost optimization",
        "B. Operational excellence",
        "C. Performance efficiency",
        "D. Reliability"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A large enterprise with multiple VPCs in several AWS Regions around the world needs to connect and centrally manage network connectivity between its VPCs.\nWhich AWS service or feature meets these requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Direct Connect",
        "B. AWS Transit Gateway",
        "C. AWS Site-to-Site VPN",
        "D. VPC endpoints"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS service supports the creation of visual reports from AWS Cost and Usage Report data?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon Athena",
        "B. Amazon QuickSight",
        "C. Amazon CloudWatch",
        "D. AWS Organizations"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "Which AWS service should be used to monitor Amazon EC2 instances for CPU and network utilization?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon Inspector",
        "B. AWS CloudTrail",
        "C. Amazon CloudWatch",
        "D. AWS Config"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company is preparing to launch a new web store that is expected to receive high traffic for an upcoming event. The web store runs only on AWS, and the company has an AWS Enterprise Support plan.\nWhich AWS resource will provide guidance about how the company should scale its architecture and operational support during the event?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Abuse team",
        "B. The designated AWS technical account manager (TAM)",
        "C. AWS infrastructure event management",
        "D. AWS Professional Services"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A user wants to deploy a service to the AWS Cloud by using infrastructure-as-code (IaC) principles.\nWhich AWS service can be used to meet this requirement?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Systems Manager",
        "B. AWS CloudFormation",
        "C. AWS CodeCommit",
        "D. AWS Config"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    },
    {
      "question": "A company that has multiple business units wants to centrally manage and govern its AWS Cloud environments. The company wants to automate the creation of\nAWS accounts, apply service control policies (SCPs), and simplify billing processes.\nWhich AWS service or tool should the company use to meet these requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Organizations",
        "B. Cost Explorer",
        "C. AWS Budgets",
        "D. AWS Trusted Advisor"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "Which IT controls do AWS and the customer share, according to the AWS shared responsibility model? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. Physical and environmental controls",
        "B. Patch management",
        "C. Cloud awareness and training",
        "D. Zone security",
        "E. Application data encryption"
      ],
      "correctAnswer": [
        2,
        3
      ],
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A company is launching an application in the AWS Cloud. The application will use Amazon S3 storage. A large team of researchers will have shared access to the data. The company must be able to recover data that is accidentally overwritten or deleted.\nWhich S3 feature should the company turn on to meet this requirement?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Server access logging",
        "B. S3 Versioning",
        "C. S3 Lifecycle rules",
        "D. Encryption in transit and at rest"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A manufacturing company has a critical application that runs at a remote site that has a slow internet connection. The company wants to migrate the workload to\nAWS. The application is sensitive to latency and interruptions in connectivity. The company wants a solution that can host this application with minimum latency.\nWhich AWS service or feature should the company use to meet these requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Availability Zones",
        "B. AWS Local Zones",
        "C. AWS Wavelength",
        "D. AWS Outposts"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A company wants to migrate its applications from its on-premises data center to a VPC in the AWS Cloud. These applications will need to access on-premises resources.\nWhich actions will meet these requirements? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. Use AWS Service Catalog to identify a list of on-premises resources that can be migrated.",
        "B. Create a VPN connection between an on-premises device and a virtual private gateway in the VPC.",
        "C. Use an Amazon CloudFront distribution and configure it to accelerate content delivery close to the on-premises resources.",
        "D. Set up an AWS Direct Connect connection between the on-premises data center and AWS.",
        "E. Use Amazon CloudFront to restrict access to static web content provided through the on-premises web servers."
      ],
      "correctAnswer": [
        1,
        4
      ],
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A company wants to use the AWS Cloud to provide secure access to desktop applications that are running in a fully managed environment.\nWhich AWS service should the company use to meet this requirement?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon S3",
        "B. Amazon AppStream 2.0",
        "C. AWS AppSync",
        "D. AWS Outposts"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A company wants to implement threat detection on its AWS infrastructure. However, the company does not want to deploy additional software.\nWhich AWS service should the company use to meet these requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon VPC",
        "B. Amazon EC2",
        "C. Amazon GuardDuty",
        "D. AWS Direct Connect"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "Which AWS service uses edge locations?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon Aurora",
        "B. AWS Global Accelerator",
        "C. Amazon Connect",
        "D. AWS Outposts"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A company needs to install an application in a Docker container.\nWhich AWS service eliminates the need to provision and manage the container hosts?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Fargate",
        "B. Amazon FSx for Windows File Server",
        "C. Amazon Elastic Container Service (Amazon ECS)",
        "D. Amazon EC2"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "Which AWS service or feature checks access policies and offers actionable recommendations to help users set secure and functional policies?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Systems Manager",
        "B. AWS IAM Access Analyzer",
        "C. AWS Trusted Advisor",
        "D. Amazon GuardDuty"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later.\nWhich AWS service should the company use to meet these requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS IoT Core",
        "B. Amazon Lightsail",
        "C. AWS Storage Gateway",
        "D. AWS Snowball Edge"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A retail company needs to build a highly available architecture for a new ecommerce platform. The company is using only AWS services that replicate data across multiple Availability Zones.\nWhich AWS services should the company use to meet this requirement? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. Amazon EC2",
        "B. Amazon Elastic Block Store (Amazon EBS)",
        "C. Amazon Aurora",
        "D. Amazon DynamoDB",
        "E. Amazon Redshift"
      ],
      "correctAnswer": [
        1,
        2
      ],
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Agility",
        "B. Elasticity",
        "C. Reliability",
        "D. Durability"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "Service control policies (SCPs) manage permissions for which of the following?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Availability Zones",
        "B. AWS Regions",
        "C. AWS Organizations",
        "D. Edge locations"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "Which AWS service can be used to encrypt data at rest?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon GuardDuty",
        "B. AWS Shield",
        "C. AWS Security Hub",
        "D. AWS Key Management Service (AWS KMS)"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "Which characteristics are advantages of using the AWS Cloud? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. A 100% service level agreement (SLA) for all AWS services",
        "B. Compute capacity that is adjusted on demand",
        "C. Availability of AWS Support for code development",
        "D. Enhanced security",
        "E. Increases in cost and complexity"
      ],
      "correctAnswer": [
        2,
        4
      ],
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A user is storing objects in Amazon S3. The user needs to restrict access to the objects to meet compliance obligations.\nWhat should the user do to meet this requirement?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Use AWS Secrets Manager.",
        "B. Tag the objects in the S3 bucket.",
        "C. Use security groups.",
        "D. Use network ACLs."
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A company wants to convert video files and audio files from their source format into a format that will play on smartphones, tablets, and web browsers.\nWhich AWS service will meet these requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon Elastic Transcoder",
        "B. Amazon Comprehend",
        "C. AWS Glue",
        "D. Amazon Rekognition"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "Which of the following are benefits of Amazon EC2 Auto Scaling? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. Improved health and availability of applications",
        "B. Reduced network latency",
        "C. Optimized performance and costs",
        "D. Automated snapshots of data",
        "E. Cross-Region Replication"
      ],
      "correctAnswer": [
        1,
        2
      ],
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A company has several departments. Each department has its own AWS accounts for its applications. The company wants all AWS costs on a single invoice to simplify payment, but the company wants to know the costs that each department is incurring.\nWhich AWS tool or feature will provide this functionality?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Cost and Usage Reports",
        "B. Consolidated billing",
        "C. Savings Plans",
        "D. AWS Budgets"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Miticoooooooooo!",
      "messageForIncorrectAnswer": "Non mi sembri uno preparato...",
      "point": "20"
    },
    {
      "question": "A company runs its workloads on premises. The company wants to forecast the cost of running a large application on AWS.\nWhich AWS service or tool can the company use to obtain this information?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Pricing Calculator",
        "B. AWS Budgets",
        "C. AWS Trusted Advisor",
        "D. Cost Explorer"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
    {
      "question": "A company wants to eliminate the need to guess infrastructure capacity before deployments. The company also wants to spend its budget on cloud resources only as the company uses the resources.\nWhich advantage of the AWS Cloud matches the company's requirements?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Reliability",
        "B. Global reach",
        "C. Economies of scale",
        "D. Pay-as-you-go pricing"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
    {
      "question": "Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, co- location environments, or on-premises facilities?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. AWS Snowmobile",
        "B. AWS Local Zones",
        "C. AWS Outposts",
        "D. AWS Fargate"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
    {
      "question": "A company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend the tape library's capacity to the AWS Cloud.\nWhich AWS service should the company use to meet this requirement?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon Elastic Block Store (Amazon EBS)",
        "B. Amazon S3",
        "C. Amazon Elastic File System (Amazon EFS)",
        "D. AWS Storage Gateway"
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
    {
      "question": "An online retail company has seasonal sales spikes several times a year, primarily around holidays. Demand is lower at other times. The company finds it difficult to predict the increasing infrastructure demand for each season.\nWhich advantages of moving to the AWS Cloud would MOST benefit the company? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. Global footprint",
        "B. Elasticity",
        "C. AWS service quotas",
        "D. AWS shared responsibility model",
        "E. Pay-as-you-go pricing"
      ],
      "correctAnswer": [
        2,
        5
      ],
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
    {
      "question": "Which AWS service can be used to turn text into lifelike speech?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Amazon Polly",
        "B. Amazon Kendra",
        "C. Amazon Rekognition",
        "D. Amazon Connect"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
    {
      "question": "Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. VPC Flow Logs",
        "B. Amazon Inspector",
        "C. VPC endpoint services",
        "D. NAT gateway"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
    {
      "question": "A company wants to ensure that two Amazon EC2 instances are in separate data centers with minimal communication latency between the data centers.\nHow can the company meet this requirement?\n",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "A. Place the EC2 instances in two separate AWS Regions connected with a VPC peering connection.",
        "B. Place the EC2 instances in two separate Availability Zones within the same AWS Region.",
        "C. Place one EC2 instance on premises and the other in an AWS Region. Then connect them by using an AWS VPN connection.",
        "D. Place both EC2 instances in a placement group for dedicated bandwidth."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
    {
      "question": "In which situations should a company create an IAM user instead of an IAM role? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. When an application that runs on Amazon EC2 instances requires access to other AWS services",
        "B. When the company creates AWS access credentials for individuals",
        "C. When the company creates an application that runs on a mobile phone that makes requests to AWS",
        "D. When the company needs to add users to IAM groups",
        "E. When users are authenticated in the corporate network and want to be able to use AWS without having to sign in a second time"
      ],
      "correctAnswer": [
        2,
        4
      ],
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
    {
      "question": "Which AWS services should a company use to read and write data that changes frequently? (Choose two.)\n",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "A. Amazon S3 Glacier",
        "B. Amazon RDS",
        "C. AWS Snowball",
        "D. Amazon Redshift",
        "E. Amazon Elastic File System (Amazon EFS)"
      ],
      "correctAnswer": [
        2,
        4
      ],
      "messageForCorrectAnswer": "Te ne intendi eh?",
      "messageForIncorrectAnswer": "Arriprova n'altra volta!",
      "point": "20"
    },
      {
        "question": "Which AWS service is used to provide encryption for Amazon EBS?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Certificate Manager",
          "B. AWS Systems Manager",
          "C. AWS KMS",
          "D. AWS Config"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which AWS services make use of global edge locations? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. AWS Fargate",
          "B. Amazon CloudFront",
          "C. AWS Global Accelerator",
          "D. AWS Wavelength",
          "E. Amazon VPC"
        ],
        "correctAnswer": [
          2,
          3
        ],
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "A company is operating several factories where it builds products. The company needs the ability to process data, store data, and run applications with local system interdependencies that require low latency.\nWhich AWS service should the company use to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS IoT Greengrass",
          "B. AWS Lambda",
          "C. AWS Outposts",
          "D. AWS Snowball Edge"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which of the following is a recommended design principle for AWS Cloud architecture?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Design tightly coupled components.",
          "B. Build a single application component that can handle all the application functionality.",
          "C. Make large changes on fewer iterations to reduce chances of failure.",
          "D. Avoid monolithic architecture by segmenting workloads."
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments.\nWhich pillar of the AWS Well-Architected Framework does this design support?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Security",
          "B. Performance efficiency",
          "C. Operational excellence",
          "D. Reliability"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which of the following acts as an instance-level firewall to control inbound and outbound access?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Network access control list",
          "B. Security groups",
          "C. AWS Trusted Advisor",
          "D. Virtual private gateways"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "A company has a workload that will run continuously for 1 year. The workload cannot tolerate service interruptions.\nWhich Amazon EC2 purchasing option will be MOST cost-effective?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. All Upfront Reserved Instances",
          "B. Partial Upfront Reserved Instances",
          "C. Dedicated Instances",
          "D. On-Demand Instances"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which AWS service helps protect against DDoS attacks?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Shield",
          "B. Amazon Inspector",
          "C. Amazon GuardDuty",
          "D. Amazon Detective"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Security",
          "B. Operational excellence",
          "C. Performance efficiency",
          "D. Cost optimization"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which AWS tool or feature acts as a VPC firewall at the subnet level?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Security group",
          "B. Network ACL",
          "C. Traffic Mirroring",
          "D. Internet gateway"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which AWS service can be used to decouple applications?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Config",
          "B. Amazon Simple Queue Service (Amazon SQS)",
          "C. AWS Batch",
          "D. Amazon Simple Email Service (Amazon SES)"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which disaster recovery option is the LEAST expensive?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Warm standby",
          "B. Multisite",
          "C. Backup and restore",
          "D. Pilot light"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which type of AWS storage is ephemeral and is deleted when an Amazon EC2 instance is stopped or terminated?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Elastic Block Store (Amazon EBS)",
          "B. Amazon EC2 instance store",
          "C. Amazon Elastic File System (Amazon EFS)",
          "D. Amazon S3"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which of the following is a characteristic of the AWS account root user?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. The root user is the only user that can be configured with multi-factor authentication (MFA).",
          "B. The root user is the only user that can access the AWS Management Console.",
          "C. The root user is the first sign-in identity that is available when an AWS account is created.",
          "D. The root user has a password that cannot be changed."
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "A company hosts an application on an Amazon EC2 instance. The EC2 instance needs to access several AWS resources, including Amazon S3 and Amazon\nDynamoDB.\nWhat is the MOST operationally efficient solution to delegate permissions?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Create an IAM role with the required permissions. Attach the role to the EC2 instance.",
          "B. Create an IAM user and use its access key and secret access key in the application.",
          "C. Create an IAM user and use its access key and secret access key to create a CLI profile in the EC2 instance",
          "D. Create an IAM role with the required permissions. Attach the role to the administrative IAM user."
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which of the following is a component of the AWS Global Infrastructure?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Alexa",
          "B. AWS Regions",
          "C. Amazon Lightsail",
          "D. AWS Organizations"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "What is the purpose of having an internet gateway within a VPC?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. To create a VPN connection to the VPC",
          "B. To allow communication between the VPC and the internet",
          "C. To impose bandwidth constraints on internet traffic",
          "D. To load balance traffic from the internet across Amazon EC2 instances"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon GuardDuty",
          "B. AWS Security Hub",
          "C. AWS Artifact",
          "D. AWS Shield"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in a various AWS accounts that it wants to interconnect.\nWhich AWS service or feature should the company use to help simplify management and reduce operational costs?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. VPC endpoint",
          "B. AWS Direct Connect",
          "C. AWS Transit Gateway",
          "D. VPC peering"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "A company is planning an infrastructure deployment to the AWS Cloud. Before the deployment, the company wants a cost estimate for running the infrastructure.\nWhich AWS service or feature can provide this information?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Cost Explorer",
          "B. AWS Trusted Advisor",
          "C. AWS Cost and Usage Report",
          "D. AWS Pricing Calculator"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Te ne intendi eh?",
        "messageForIncorrectAnswer": "Arriprova n'altra volta!",
        "point": "20"
      },
      {
        "question": "Which AWS service of tool helps to centrally manage billing and allow controlled access to resources across AWS accounts?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Identity and Access Management (IAM)",
          "B. AWS Organizations",
          "C. Cost Explorer",
          "D. AWS Budgets"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following are Amazon Virtual Private Cloud (Amazon VPC) resources?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Objects; access control lists (ACLs)",
          "B. Subnets; internet gateways",
          "C. Access policies; buckets",
          "D. Groups; roles"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to identify the last time that a specific user accessed the AWS Management Console.\nWhich AWS service will provide this information?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Cognito",
          "B. AWS CloudTrail",
          "C. Amazon Inspector",
          "D. Amazon GuardDuty"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company launched an Amazon EC2 instance with the latest Amazon Linux 2 Amazon Machine Image (AMI).\nWhich actions can a system administrator take to connect to the EC2 instance? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Use Amazon EC2 Instance Connect.",
          "B. Use a Remote Desktop Protocol (RDP) connection.",
          "C. Use AWS Batch",
          "D. Use AWS Systems Manager Session Manager.",
          "E. Use Amazon Connect"
        ],
        "correctAnswer": [
          1,
          3
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to perform sentiment analysis on customer service email messages that it receives. The company wants to identify whether the customer service engagement was positive or negative.\nWhich AWS service should the company use to perform this analysis?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Textract",
          "B. Amazon Translate",
          "C. Amazon Comprehend",
          "D. Amazon Rekognition"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "What is the total amount of storage offered by Amazon S3?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. 100MB",
          "B. 5 GB",
          "C. 5 TB",
          "D. Unlimited"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is migrating to Amazon S3. The company needs to transfer 60 TB of data from an on-premises data center to AWS within 10 days.\nWhich AWS service should the company use to accomplish this migration?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon S3 Glacier",
          "B. AWS Database Migration Service (AWS DMS)",
          "C. AWS Snowball",
          "D. AWS Direct Connect"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "What type of database is Amazon DynamoDB?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. In-memory",
          "B. Relational",
          "C. Key-value",
          "D. Graph"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A large organization has a single AWS account.\nWhat are the advantages of reconfiguring the single account into multiple AWS accounts? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. It allows for administrative isolation between different workloads.",
          "B. Discounts can be applied on a quarterly basis by submitting cases in the AWS Management Console.",
          "C. Transitioning objects from Amazon S3 to Amazon S3 Glacier in separate AWS accounts will be less expensive.",
          "D. Having multiple accounts reduces the risks associated with malicious activity targeted at a single account.",
          "E. Amazon QuickSight offers access to a cost tool that provides application-specific recommendations for environments running in multiple accounts."
        ],
        "correctAnswer": [
          1,
          3
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A retail company has recently migrated its website to AWS. The company wants to ensure that it is protected from SQL injection attacks. The website uses an\nApplication Load Balancer to distribute traffic to multiple Amazon EC2 instances.\nWhich AWS service or feature can be used to create a custom rule that blocks SQL injection attacks?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Security groups",
          "B. AWS WAF",
          "C. Network ACLs",
          "D. AWS Shield"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service provides a feature that can be used to proactively monitor and plan for the service quotas of AWS resources?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS CloudTrail",
          "B. AWS Personal Health Dashboard",
          "C. AWS Trusted Advisor",
          "D. Amazon CloudWatch"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Elimination of expenses for running and maintaining data centers",
          "B. Price discounts that are identical to discounts from hardware providers",
          "C. Distribution of all operational controls to AWS",
          "D. Elimination of operational expenses"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which design principle is included in the operational excellence pillar of the AWS Well-Architected Framework?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Create annotated documentation.",
          "B. Anticipate failure.",
          "C. Ensure performance efficiency.",
          "D. Optimize costs."
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS services offer gateway VPC endpoints that can be used to avoid sending traffic over the internet? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Amazon Simple Notification Service (Amazon SNS)",
          "B. Amazon Simple Queue Service (Amazon SQS)",
          "C. AWS CodeBuild",
          "D. Amazon S3",
          "E. Amazon DynamoDB"
        ],
        "correctAnswer": [
          2,
          4
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following is the customer responsible for updating and patching, according to the AWS shared responsibility model?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon FSx for Windows File Server",
          "B. Amazon WorkSpaces virtual Windows desktop",
          "C. AWS Directory Service for Microsoft Active Directory",
          "D. Amazon RDS for Microsoft SQL Server"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Who has the responsibility to patch the host operating system of an Amazon EC2 instance, according to the AWS shared responsibility model?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Both AWS and the customer",
          "B. The customer only",
          "C. The EC2 hardware manufacturer",
          "D. AWS only"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is using an Amazon RDS DB instance for an application that is deployed in the AWS Cloud. The company needs regular patching of the operating system of the server where the DB instance runs.\nWhat is the company's responsibility in this situation, according to the AWS shared responsibility model?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Open a support case to obtain administrative access to the server so that the company can patch the DB instance operating system.",
          "B. Open a support case and request that AWS patch the DB instance operating system.",
          "C. Use administrative access to the server, and apply the operating system patches during the regular maintenance window that is defined for the DB instance.",
          "D. Establish a regular maintenance window that tells AWS when to patch the DB instance operating system."
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Why is an AWS Well-Architected review a critical part of the cloud design process?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. A Well-Architected review is mandatory before a workload can run on AWS.",
          "B. A Well-Architected review helps identify design gaps and helps evaluate design decisions and related documents.",
          "C. A Well-Architected review is an audit mechanism that is a part of requirements for service level agreements.",
          "D. A Well-Architected review eliminates the need for ongoing auditing and compliance tests."
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company implements an Amazon EC2 Auto Scaling policy along with an Application Load Balancer to automatically recover unhealthy applications that run on\nAmazon EC2 instances.\nWhich pillar of the AWS Well-Architected Framework does this action cover?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Security",
          "B. Performance efficiency",
          "C. Operational excellence",
          "D. Reliability"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS Cloud benefit is shown by an architecture's ability to withstand failures with minimal downtime?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Agility",
          "B. Elasticity",
          "C. Scalability",
          "D. High availability"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Under the AWS shared responsibility model, which task is the customer's responsibility when managing AWS Lambda functions?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Creating versions of Lambda functions",
          "B. Maintaining server and operating systems",
          "C. Scaling Lambda resources according to demand",
          "D. Updating the Lambda runtime environment"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "What does the AWS Concierge Support team provide?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. A technical expert dedicated to the user",
          "B. A primary point of contact for AWS Billing and AWS Support",
          "C. A partner to help provide scaling guidance for an event launch",
          "D. A dedicated AWS staff member who reviews the user's application architecture"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to generate reports that can break down cloud costs by product, by company-defined tags, and by hour, day, and month.\nWhich AWS tool should the company use to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Reserved Instance utilization and coverage reports",
          "B. Savings Plans utilization reports",
          "C. AWS Budgets reports",
          "D. AWS Cost and Usage Reports"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company has a serverless application that includes an Amazon API Gateway API, an AWS Lambda function, and an Amazon DynamoDB database.\nWhich AWS service can the company use to trace user requests as they move through the application's components?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS CloudTrail",
          "B. Amazon CloudWatch",
          "C. Amazon Inspector",
          "D. AWS X-Ray"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to set up a petabyte-scale data warehouse in the AWS Cloud.\nWhich AWS service will meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon DynamoDB",
          "B. Amazon RDS",
          "C. Amazon Redshift",
          "D. Amazon ElastiCache"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service is always provided at no charge?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon S3",
          "B. AWS Identity and Access Management (IAM)",
          "C. Elastic Load Balancers",
          "D. AWS WAF"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to design an AWS disaster recovery plan to cover multiple geographic areas.\nWhich action will meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Configure multiple AWS accounts.",
          "B. Configure the architecture across multiple Availability Zones in an AWS Region.",
          "C. Configure the architecture across multiple AWS Regions.",
          "D. Configure the architecture among many edge locations."
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following is a benefit of moving from an on-premises data center to the AWS Cloud?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Compute instances can be launched and terminated as needed to optimize costs.",
          "B. Compute costs can be viewed in the AWS Billing and Cost Management console.",
          "C. Users retain full administrative access to their compute instances.",
          "D. Users can optimize costs by permanently running enough instances at peak load."
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "In which ways does the AWS Cloud offer lower total cost of ownership (TCO) of computing resources than on-premises data centers? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. AWS replaces upfront capital expenditures with pay-as-you-go costs.",
          "B. AWS is designed for high availability, which eliminates user downtime.",
          "C. AWS eliminates the need for on-premises IT staff.",
          "D. AWS uses economies of scale to continually reduce prices.",
          "E. AWS offers a single pricing model for Amazon EC2 instances."
        ],
        "correctAnswer": [
          1,
          3
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service monitors AWS accounts for security threats?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon GuardDuty",
          "B. AWS Secrets Manager",
          "C. Amazon Cognito",
          "D. AWS Certificate Manager (ACM)"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which benefit is included with an AWS Enterprise Support plan?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Partner Network (APN) support at no cost.",
          "B. Designated support from an AWS technical account manager (TAM)",
          "C. On-site support from AWS engineers",
          "D. AWS managed compliance as code with AWS Config"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which task does AWS perform automatically?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Encrypt data that is stored in Amazon DynamoDB.",
          "B. Patch Amazon EC2 instances.",
          "C. Encrypt user network traffic.",
          "D. Create TLS certificates for users' websites."
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service or tool can a company use to visualize, understand, and manage AWS spending and usage over time?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Trusted Advisor",
          "B. Amazon CloudWatch",
          "C. Cost Explorer",
          "D. AWS Budgets"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources.\nWhich AWS service or feature can be used to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Local Zones",
          "B. Availability Zones",
          "C. AWS Outposts",
          "D. AWS Wavelength Zones"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company requires an isolated environment within AWS for security purposes.\nWhich action can be taken to accomplish this?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Create a separate Availability Zone to host the resources.",
          "B. Create a separate VPC to host the resources.",
          "C. Create a placement group to host the resources.",
          "D. Create an AWS Direct Connect connection between the company and AWS."
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service is a highly available and scalable DNS web service?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon VPC",
          "B. Amazon CloudFront",
          "C. Amazon Route 53",
          "D. Amazon Connect"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following is an AWS best practice for managing an AWS account root user?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Keep the root user password with the security team.",
          "B. Enable multi-factor authentication (MFA) for the root user.",
          "C. Create an access key for the root user.",
          "D. Keep the root user password consistent for compliance purposes."
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to improve its security and audit posture by limiting Amazon EC2 inbound access.\nWhat should the company use to access instances remotely instead of opening inbound SSH ports and managing SSH keys?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. EC2 key pairs",
          "B. AWS Systems Manager Session Manager",
          "C. AWS Identity and Access Management (IAM)",
          "D. Network ACLs"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. No upfront payment",
          "B. Hourly on-demand payment",
          "C. Partial upfront payment",
          "D. All upfront payment"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company has refined its workload to use specific AWS services to improve efficiency and reduce cost.\nWhich best practice for cost governance does this example show?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Resource controls",
          "B. Cost allocation",
          "C. Architecture optimization",
          "D. Tagging enforcement"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company would like to host its MySQL databases on AWS and maintain full control over the operating system, database installation, and configuration.\nWhich AWS service should the company use to host the databases?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon RDS",
          "B. Amazon EC2",
          "C. Amazon DynamoDB",
          "D. Amazon Aurora"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "How does the AWS global infrastructure offer high availability and fault tolerance to its users?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. The AWS infrastructure is made up of multiple AWS Regions within various Availability Zones located in areas that have low flood risk, and are interconnected with low-latency networks and redundant power supplies.",
          "B. The AWS infrastructure consists of subnets containing various Availability Zones with multiple data centers located in the same geographic location.",
          "C. AWS allows users to choose AWS Regions and data centers so that users can select the closest data centers in different Regions.",
          "D. The AWS infrastructure consists of isolated AWS Regions with independent Availability Zones that are connected with low-latency networking and redundant power supplies."
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is using Amazon EC2 Auto Scaling to scale its Amazon EC2 instances.\nWhich benefit of the AWS Cloud does this example illustrate?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. High availability",
          "B. Elasticity",
          "C. Reliability",
          "D. Global reach"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service or feature is used to send both text and email messages from distributed applications?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Simple Notification Service (Amazon SNS)",
          "B. Amazon Simple Email Service (Amazon SES)",
          "C. Amazon CloudWatch alerts",
          "D. Amazon Simple Queue Service (Amazon SQS)"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A user is able to set up a master payer account to view consolidated billing reports through:\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Budgets.",
          "B. Amazon Macie.",
          "C. Amazon QuickSight.",
          "D. AWS Organizations."
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "According to the AWS shared responsibility model, which task is the customer's responsibility?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Maintaining the infrastructure needed to run AWS Lambda",
          "B. Updating the operating system of Amazon DynamoDB instances",
          "C. Maintaining Amazon S3 infrastructure",
          "D. Updating the guest operating system on Amazon EC2 instances"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to migrate a small website and database quickly from on-premises infrastructure to the AWS Cloud. The company has limited operational knowledge to perform the migration.\nWhich AWS service supports this use case?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon EC2",
          "B. Amazon Lightsail",
          "C. Amazon S3",
          "D. AWS Lambda"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is moving multiple applications to a single AWS account. The company wants to monitor the AWS Cloud costs incurred by each application.\nWhat can the company do to meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Set up invoiced billing.",
          "B. Use AWS Artifact.",
          "C. Set budgets in Cost Explorer.",
          "D. Create cost allocation tags."
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Vertical scaling",
          "B. Manual failure recovery",
          "C. Testing recovery procedures",
          "D. Changing infrastructure manually"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software.\nWhich AWS service can be used to accomplish this?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon RDS",
          "B. Amazon DynamoDB",
          "C. Amazon Aurora",
          "D. Amazon Redshift"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which task is an AWS responsibility when a workload is running in Amazon RDS?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Creating the database table",
          "B. Updating the database schema",
          "C. Installing the database engine",
          "D. Dropping the database records"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A development team wants to publish and manage web services that provide REST APIs.\nWhich AWS service will meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS App Mesh",
          "B. Amazon API Gateway",
          "C. Amazon CloudFront",
          "D. AWS Cloud Map"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company has a social media platform in which users upload and share photos with other users. The company wants to identify and remove inappropriate photos. The company has no machine learning (ML) scientists and must build this detection capability with no ML expertise.\nWhich AWS service should the company use to build this capability?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon SageMaker",
          "B. Amazon Textract",
          "C. Amazon Rekognition",
          "D. Amazon Comprehend"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Database backups",
          "B. Database software patches",
          "C. Operating system patches",
          "D. Operating system installations."
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to use Amazon S3 to store its legacy data. The data is rarely accessed. However, the data is critical and cannot be recreated. The data needs to be available for retrieval within seconds.\nWhich S3 storage class meets these requirements MOST cost-effectively?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. S3 Standard",
          "B. S3 One Zone-Infrequent Access (S3 One Zone-IA)",
          "C. S3 Standard-Infrequent Access (S3 Standard-IA)",
          "D. S3 Glacier"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "An online retail company wants to migrate its on-premises workload to AWS. The company needs to automatically handle a seasonal workload increase in a cost- effective manner.\nWhich AWS Cloud features will help the company meet this requirement? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Cross-Region workload deployment",
          "B. Pay-as-you-go pricing",
          "C. Built-in AWS CloudTrail audit capabilities",
          "D. Auto Scaling policies",
          "E. Centralized logging"
        ],
        "correctAnswer": [
          2,
          4
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service helps developers use loose coupling and reliable messaging between microservices?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Elastic Load Balancing",
          "B. Amazon Simple Notification Service (Amazon SNS)",
          "C. Amazon CloudFront",
          "D. Amazon Simple Queue Service (Amazon SQS)"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to build an application that uses AWS services. The application will be delivered to residents in European Counties. The company must abide by regional regulatory requirements.\nWhich AWS service or program should the company use to determine which AWS services meet the regional requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Audit Manager",
          "B. AWS Shield",
          "C. AWS Compliance Program",
          "D. AWS Artifact"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to implement identity management for a fleet of mobile apps that are running in the AWS Cloud.\nWhich AWS service will meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Cognito",
          "B. AWS Security Hub",
          "C. AWS Shield",
          "D. AWS WAF"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs an Amazon EC2 instance for a rightsized database server that must run constantly for 1 year.\nWhich EC2 instance purchasing option will meet these requirements MOST cost-effectively?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Standard Reserved Instance",
          "B. Convertible Reserved Instance",
          "C. On-Demand Instance",
          "D. Spot Instance"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company has multiple applications and is now building a new multi-tier application. The company will host the new application on Amazon EC2 instances. The company wants the network routing and traffic between the various applications to follow the security principle of least privilege.\nWhich AWS service or feature should the company use to enforce this principle?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Security groups",
          "B. AWS Shield",
          "C. AWS Global Accelerator",
          "D. AWS Direct Connect gateway"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company's web application requires AWS credentials and authorizations to use an AWS service.\nWhich IAM entity should the company use as best practice?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. IAM role",
          "B. IAM user",
          "C. IAM group",
          "D. IAM multi-factor authentication (MFA)"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is creating a document that defines the operating system patch routine for all the company's systems.\nWhich AWS resources should the company include in this document? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Amazon EC2 instances",
          "B. AWS Lambda functions",
          "C. AWS Fargate tasks",
          "D. Amazon RDS instances",
          "E. Amazon Elastic Container Service (Amazon ECS) instances"
        ],
        "correctAnswer": [
          1,
          4
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service or feature gives a company the ability to control incoming traffic and outgoing traffic for Amazon EC2 instances?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Security groups",
          "B. Amazon Route 53",
          "C. AWS Direct Connect",
          "D. Amazon VPC"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is starting to build its infrastructure in the AWS Cloud. The company wants access to technical support during business hours. The company also wants general architectural guidance as teams build and test new applications.\nWhich AWS Support plan will meet these requirements at the LOWEST cost?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Basic Support",
          "B. AWS Developer Support",
          "C. AWS Business Support",
          "D. AWS Enterprise Support"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is migrating its public website to AWS. The company wants to host the domain name for the website on AWS.\nWhich AWS service should the company use to meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Lambda",
          "B. Amazon Route 53",
          "C. Amazon CloudFront",
          "D. AWS Direct Connect"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance, and security.\nWhich AWS service can the company use to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Shield",
          "B. AWS WAF",
          "C. AWS Trusted Advisor",
          "D. AWS Service Catalog"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service provides the capability to view end-to-end performance metrics and troubleshoot distributed applications?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Cloud9",
          "B. AWS CodeStar",
          "C. AWS Cloud Map",
          "D. AWS X-Ray"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Pay-as-you-go pricing",
          "B. High availability",
          "C. Global reach",
          "D. Economies of scale"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service provides threat detection by monitoring for malicious activities and unauthorized actions to protect AWS accounts, workloads, and data that is stored in Amazon S3?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Shield",
          "B. AWS Firewall Manager",
          "C. Amazon GuardDuty",
          "D. Amazon Inspector"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service can a company use to store and manage Docker images?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon DynamoDB",
          "B. Amazon Kinesis Data Streams",
          "C. Amazon Elastic Container Registry (Amazon ECR)",
          "D. Amazon Elastic File System (Amazon EFS)"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances. The report also must identify operating system vulnerabilities on those instances.\nWhich AWS service or feature should the company use to meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Trusted Advisor",
          "B. Security groups",
          "C. Amazon Macie",
          "D. Amazon Inspector"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A global company is building a simple time-tracking mobile app. The app needs to operate globally and must store collected data in a database. Data must be accessible from the AWS Region that is closest to the user.\nWhat should the company do to meet these data storage requirements with the LEAST amount of operational overhead?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Use Amazon EC2 in multiple Regions to host separate databases",
          "B. Use Amazon RDS cross-Region replication",
          "C. Use Amazon DynamoDB global tables",
          "D. Use AWS Database Migration Service (AWS DMS)"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following are economic advantages of the AWS Cloud? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Increased workforce productivity",
          "B. Decreased need to encrypt user data",
          "C. Manual compliance audits",
          "D. Simplified total cost of ownership (TCO) accounting",
          "E. Faster product launches"
        ],
        "correctAnswer": [
          4,
          5
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which controls does the customer fully inherit from AWS in the AWS shared responsibility model?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Patch management controls",
          "B. Awareness and training controls",
          "C. Physical and environmental controls",
          "D. Configuration management controls"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which task is a customer's responsibility, according to the AWS shared responsibility model?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Management of the guest operating systems",
          "B. Maintenance of the configuration of infrastructure devices",
          "C. Management of the host operating systems and virtualization",
          "D. Maintenance of the software that powers Availability Zones"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to deliver new website features quickly in an iterative manner to minimize the time to market.\nWhich AWS Cloud concept does this requirement represent?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Reliability",
          "B. Elasticity",
          "C. Agility",
          "D. High availability"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to increase its ability to recover its infrastructure in the case of a natural disaster.\nWhich pillar of the AWS Well-Architected Framework does this ability represent?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Cost optimization",
          "B. Performance efficiency",
          "C. Reliability",
          "D. Security"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service tracks API calls and user activity?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Organizations",
          "B. AWS Config",
          "C. Amazon CloudWatch",
          "D. AWS CloudTrail"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service, feature, or tool uses machine learning to continuously monitor cost and usage for unusual cloud spending?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Lookout for Metrics",
          "B. AWS Budgets",
          "C. Amazon CloudWatch",
          "D. AWS Cost Anomaly Detection"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company deployed an application on an Amazon EC2 instance. The application ran as expected for 6 months in the past week, users have reported latency issues. A system administrator found that the CPU utilization was at 100% during business hours. The company wants a scalable solution to meet demand.\nWhich AWS service or feature should the company use to handle the load for its application during periods of high demand?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Auto Scaling groups",
          "B. AWS Global Accelerator",
          "C. Amazon Route 53",
          "D. An Elastic IP address"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to migrate to AWS and use the same security software it uses on premises. The security software vendor offers its security software as a service on AWS.\nWhere can the company purchase the security solution?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Partner Solutions Finder",
          "B. AWS Support Center",
          "C. AWS Management Console",
          "D. AWS Marketplace"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is generating large sets of critical data in its on-premises data center. The company needs to securely transfer the data to AWS for processing. These transfers must occur daily over a dedicated connection.\nWhich AWS service should the company use to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Backup",
          "B. AWS DataSync",
          "C. AWS Direct Connect",
          "D. AWS Snowball"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to run production workloads on AWS. The company wants access to technical support from engineers 24 hours a day, 7 days a week. The company also wants access to the AWS Health API and contextual architectural guidance for business use cases. The company has a strong IT support team and does not need concierge support.\nWhich AWS Support plan will meet these requirements at the LOWEST cost?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Basic Support",
          "B. AWS Developer Support",
          "C. AWS Business Support",
          "D. AWS Enterprise Support"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following is a managed AWS service that is used specifically for extract, transform, and load (ETL) data?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Athena",
          "B. AWS Glue",
          "C. Amazon S3",
          "D. AWS Snowball Edge"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following actions are controlled with AWS Identity and Access Management (IAM)? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Control access to AWS service APIs and to other specific resources.",
          "B. Provide intelligent threat detection and continuous monitoring.",
          "C. Protect the AWS environment using multi-factor authentication (MFA).",
          "D. Grant users access to AWS data centers.",
          "E. Provide firewall protection for applications from common web attacks."
        ],
        "correctAnswer": [
          1,
          3
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following are shared controls that apply to both AWS and the customer, according to the AWS shared responsibility model? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Resource configuration management",
          "B. Network data integrity",
          "C. Employee awareness and training",
          "D. Physical and environmental security",
          "E. Replacement and disposal of disk drives"
        ],
        "correctAnswer": [
          1,
          3
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "What information is found on an AWS Identity and Access Management (IAM) credential report? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. The date and time when an IAM user's password was last used to sign in to the AWS Management Console.",
          "B. The type of multi-factor authentication (MFA) device assigned to an IAM user.",
          "C. The User-Agent browser identifier for each IAM user currently logged in.",
          "D. Whether multi-factor authentication (MFA) has been enabled for an IAM user.",
          "E. The number of incorrect login attempts by each IAM user in the previous 30 days."
        ],
        "correctAnswer": [
          1,
          3
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "What is the LEAST expensive AWS Support plan that contains a full set of AWS Trusted Advisor best practice checks?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Enterprise Support",
          "B. AWS Business Support",
          "C. AWS Developer Support",
          "D. AWS Basic Support"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service provides domain registration, DNS routing, and service health checks?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Direct Connect",
          "B. Amazon Route 53",
          "C. Amazon CloudFront",
          "D. Amazon API Gateway"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service should a company use to organize, characterize, and search large numbers of images?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Transcribe",
          "B. Amazon Rekognition",
          "C. Amazon Aurora",
          "D. Amazon QuickSight"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "An ecommerce company wants to use Amazon EC2 Auto Scaling to add and remove EC2 instances based on CPU utilization.\nWhich AWS service or feature can initiate an Amazon EC2 Auto Scaling action to achieve this goal?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Simple Queue Service (Amazon SQS)",
          "B. Amazon Simple Notification Service (Amazon SNS)",
          "C. AWS Systems Manager",
          "D. Amazon CloudWatch alarm"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to host a private version control system for its application code in the AWS Cloud.\nWhich AWS service should the company use to meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS CodePipeline",
          "B. AWS CodeStar",
          "C. AWS CodeCommit",
          "D. AWS CodeDeploy"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service or tool can a company set up to send notifications that a custom spending threshold has been reached or exceeded?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Budgets",
          "B. AWS Trusted Advisor",
          "C. AWS CloudTrail",
          "D. AWS Support"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service is used to host static websites?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon S3",
          "B. Amazon Elastic Block Store (Amazon EBS)",
          "C. AWS CloudFormation",
          "D. Amazon Elastic File System (Amazon EFS)"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service contains built-in engines to protect web applications that run in the cloud from SQL injection attacks and cross-site scripting?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS WAF",
          "B. AWS Shield Advanced",
          "C. Amazon GuardDuty",
          "D. Amazon Detective"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company owns per-core software licenses.\nWhich Amazon EC2 instance purchasing option must the company use for this license type?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Reserved Instances",
          "B. Dedicated Hosts",
          "C. Spot Instances",
          "D. Dedicated Instances"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to set up user authentication for a new application. Users must be able to sign in directly with a user name and password, or through a third- party provider.\nWhich AWS service should the company use to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Single Sign-On",
          "B. AWS Signer",
          "C. Amazon Cognito",
          "D. AWS Directory Service"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company's IT team is managing MySQL database server clusters. The IT team has to patch the database and take backup snapshots of the data in the clusters.\nThe company wants to move this workload to AWS so that these tasks will be completed automatically.\nWhat should the company do to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Deploy MySQL database server clusters on Amazon EC2 instances.",
          "B. Use Amazon RDS with a MySQL database.",
          "C. Use an AWS CloudFormation template to deploy MySQL database servers on Amazon EC2 instances.",
          "D. Migrate all the MySQL database data to Amazon S3."
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "What is the primary use case for Amazon GuardDuty?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Prevention of DDoS attacks",
          "B. Protection against SQL injection attacks",
          "C. Automatic monitoring for threats to AWS workloads",
          "D. Automatic provisioning of AWS resources"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which statements explain the business value of migration to the AWS Cloud? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. The migration of enterprise applications to the AWS Cloud makes these applications automatically available on mobile devices.",
          "B. AWS availability and security provide the ability to improve service level agreements (SLAs) while reducing risk and unplanned downtime.",
          "C. Companies that migrate to the AWS Cloud eliminate the need to plan for high availability and disaster recovery.",
          "D. Companies that migrate to the AWS Cloud reduce IT costs related to infrastructure, freeing budget for reinvestment in other areas.",
          "E. Applications are modernized because migration to the AWS Cloud requires companies to rearchitect and rewrite all enterprise applications."
        ],
        "correctAnswer": [
          3,
          4
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to identify personally identifiable information (PII), such as credit card numbers, from data that is stored in Amazon S3.\nWhich AWS service should the company use to meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Inspector",
          "B. AWS Shield",
          "C. Amazon GuardDuty",
          "D. Amazon Macie"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS services or tools are designed to protect a workload from SQL injections, cross-site scripting, and DDoS attacks? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. VPC endpoint",
          "B. Virtual private gateway",
          "C. AWS Shield Standard",
          "D. AWS Config",
          "E. AWS WAF"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to forecast future costs and usage of AWS resources based on past consumption.\nWhich AWS service or tool will provide this forecast?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Cost and Usage Report",
          "B. Amazon Forecast",
          "C. AWS Pricing Calculator",
          "D. Cost Explorer"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS services use cloud-native storage that provides replication across multiple Availability Zones by default? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Amazon ElastiCache",
          "B. Amazon RDS for Oracle",
          "C. Amazon Neptune",
          "D. Amazon DocumentDB (with MongoDB compatibility)",
          "E. Amazon Redshift"
        ],
        "correctAnswer": [
          3,
          4
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS services are serverless? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. AWS Fargate",
          "B. Amazon Managed Streaming for Apache Kafka",
          "C. Amazon EMR",
          "D. Amazon S3",
          "E. Amazon EC2"
        ],
        "correctAnswer": [
          1,
          4
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which task is the responsibility of AWS, according to the AWS shared responsibility model?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Apply guest operating system patches to Amazon EC2 instances.",
          "B. Provide monitoring of human resources information management (HRIM) systems.",
          "C. Perform automated backups of Amazon RDS instances.",
          "D. Optimize the costs of running AWS services."
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to deploy a PostgreSQL database into Amazon RDS. The database must be highly available and fault tolerant.\nWhich AWS solution should the company use to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon RDS with a single Availability Zone",
          "B. Amazon RDS snapshots",
          "C. Amazon RDS with multiple Availability Zones",
          "D. AWS Database Migration Service (AWS DMS)"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to add facial identification to its user verification process on an application.\nWhich AWS service should the company use to meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Polly",
          "B. Amazon Transcribe",
          "C. Amazon Lex",
          "D. Amazon Rekognition"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants the ability to quickly upload its applications to the AWS Cloud without needing to provision underlying resources.\nWhich AWS service will meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS CloudFormation",
          "B. AWS Elastic Beanstalk",
          "C. AWS CodeDeploy",
          "D. AWS CodeCommit"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service monitors CPU utilization on Amazon EC2 instances?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS CloudTrail",
          "B. Amazon Inspector",
          "C. AWS Config",
          "D. Amazon CloudWatch"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to label its AWS resources so that the company can categorize and track costs.\nWhat should the company do to meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Use cost allocation tags.",
          "B. Use AWS Identity and Access Management (IAM).",
          "C. Use AWS Organizations.",
          "D. Use the AWS Cost Management coverage report."
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants its employees to have access to virtual desktop infrastructure to securely access company-provided desktops through the employees' personal devices.\nWhich AWS service should the company use to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon AppStream 2.0",
          "B. AWS AppSync",
          "C. Amazon FSx for Windows File Server",
          "D. Amazon WorkSpaces"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which task can a company complete by using AWS Organizations?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Track application deployment statuses globally.",
          "B. Remove unused and underutilized AWS resources across all accounts.",
          "C. Activate DDoS protection across all accounts.",
          "D. Share pre-purchased Amazon EC2 resources across accounts."
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A user has been granted permission to change their own IAM user password.\nWhich AWS services can the user use to change the password? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. AWS Command Line Interface (AWS CLI)",
          "B. AWS Key Management Service (AWS KMS)",
          "C. AWS Management Console",
          "D. AWS Resource Access Manager (AWS RAM)",
          "E. AWS Secrets Manager"
        ],
        "correctAnswer": [
          1,
          3
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to run an application on Amazon EC2 instances. The instances cannot be interrupted at any time. The company needs an instance purchasing option that requires no long-term commitment or upfront payment.\nWhich instance purchasing option will meet these requirements MOST cost-effectively?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. On-Demand Instances",
          "B. Spot Instances",
          "C. Dedicated Hosts",
          "D. Reserved Instances"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company uses Amazon EC2 instances to run its web application. The company uses On-Demand Instances and Spot Instances. The company needs to visualize its monthly spending on both types of instances.\nWhich AWS service or feature will meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Cost Explorer",
          "B. AWS Budgets",
          "C. Amazon CloudWatch",
          "D. AWS Cost Categories"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which task can a user complete by using AWS Identity and Access Management (IAM)?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Validate JSON syntax from an application configuration file.",
          "B. Analyze logs from an Amazon API Gateway call.",
          "C. Filter traffic to or from an Amazon EC2 instance.",
          "D. Grant permissions to applications that run on Amazon EC2 instances."
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to generate reports for business intelligence and operational analytics on petabytes of semistructured and structured data. These reports are produced from standard SQL queries on data that is in an Amazon S3 data lake.\nWhich AWS service provides the ability to analyze this data?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon RDS",
          "B. Amazon Neptune",
          "C. Amazon DynamoDB",
          "D. Amazon Redshift"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A system automatically recovers from failure when a company launches its workload on the AWS Cloud services platform.\nWhich pillar of the AWS Well-Architected Framework does this situation demonstrate?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Cost optimization",
          "B. Operational excellence",
          "C. Performance efficiency",
          "D. Reliability"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following describes AWS Local Zones?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. A cluster of data centers in one geographic location",
          "B. A site used by Amazon CloudFront to cache frequently accessed content",
          "C. An extension of an AWS Region to more granular locations",
          "D. One or more data centers with redundant power and networking"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A retail company is migrating its IT infrastructure applications from on premises to the AWS Cloud.\nWhich costs will the company eliminate with this migration? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Cost of data center operations",
          "B. Cost of application licensing",
          "C. Cost of marketing campaigns",
          "D. Cost of physical server hardware",
          "E. Cost of network management"
        ],
        "correctAnswer": [
          1,
          4
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "What is a benefit of moving to the AWS Cloud in terms of improving time to market?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Decreased deployment speed",
          "B. Increased application security",
          "C. Increased business agility",
          "D. Increased backup capabilities"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following are characteristics of a serverless application that runs in the AWS Cloud? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Users must manually configure Amazon EC2 instances.",
          "B. Users have a choice of operating systems.",
          "C. The application has built-in fault tolerance.",
          "D. Users can run Amazon EC2 Spot Instances.",
          "E. The application can scale based on demand."
        ],
        "correctAnswer": [
          3,
          5
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company has existing software licenses that it wants to bring to AWS, but the licensing model requires licensing physical cores.\nHow can the company meet this requirement in the AWS Cloud?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Launch an Amazon EC2 instance with default tenancy.",
          "B. Launch an Amazon EC2 instance on a Dedicated Host.",
          "C. Create an On-Demand Capacity Reservation.",
          "D. Purchase Dedicated Reserved Instances."
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company has a complex AWS architecture. The company needs assistance from a dedicated technical professional who can suggest strategies regarding incidents, trade-offs, support, and risk management.\nWhich AWS Support plan will provide the required support?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Business Support",
          "B. AWS Enterprise Support",
          "C. AWS Developer Support",
          "D. AWS Basic Support"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following is an advantage that the AWS Cloud provides to users?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Users eliminate the need to guess about infrastructure capacity requirements.",
          "B. Users decrease their variable costs by maintaining sole ownership of IT hardware.",
          "C. Users maintain control of underlying IT infrastructure hardware.",
          "D. Users maintain control of operating systems for managed services."
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS services can use AWS WAF to protect against common web exploitations? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Amazon Route 53",
          "B. Amazon CloudFront",
          "C. AWS Transfer Family",
          "D. AWS Site-to-Site VPN",
          "E. Amazon API Gateway"
        ],
        "correctAnswer": [
          2,
          5
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which controls are shared under the AWS shared responsibility model? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Awareness and training",
          "B. Patching of Amazon RDS",
          "C. Configuration management",
          "D. Physical and environmental controls",
          "E. Service and communications protection or security"
        ],
        "correctAnswer": [
          1,
          3
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company manages global applications that require static IP addresses.\nWhich AWS service would enable the company to improve the availability and performance of its applications?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon CloudFront",
          "B. AWS Global Accelerator",
          "C. Amazon S3 Transfer Acceleration",
          "D. Amazon API Gateway"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following are AWS compute services? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Amazon Lightsail",
          "B. AWS Systems Manager",
          "C. AWS CloudFormation",
          "D. AWS Batch",
          "E. Amazon Inspector"
        ],
        "correctAnswer": [
          1,
          4
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to report on events that involve the specific AWS services that the company uses.\nWhich AWS service or resource can the company use with Amazon CloudWatch to meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Inspector",
          "B. AWS Personal Health Dashboard",
          "C. AWS Trusted Advisor",
          "D. AWS CloudTrail logs"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company with AWS Enterprise Support needs help understanding its monthly AWS bill and wants to implement billing best practices.\nWhich AWS tool or resource is available to accomplish these goals?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Resource tagging",
          "B. AWS Concierge Support team",
          "C. AWS Abuse team",
          "D. AWS Support"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following is an AWS key-value database offering consistent single-digit millisecond performance at any scale?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon RDS",
          "B. Amazon Aurora",
          "C. Amazon DynamoDB",
          "D. Amazon Redshift"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is developing a new Node.js application. The application must have a scalable NoSQL database to meet increasing demand as the popularity of the application grows.\nWhich AWS service will meet the requirements for the database?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Aurora Serverless",
          "B. Amazon ElastiCache",
          "C. Amazon DynamoDB",
          "D. Amazon Redshift"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to set up an entire development and continuous delivery toolchain for coding, building, testing, and deploying code.\nWhich AWS service will meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon CodeGuru",
          "B. AWS CodeStar",
          "C. AWS CodeCommit",
          "D. AWS CodeDeploy"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which service enables customers to audit API calls in their AWS accounts?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS CloudTrail",
          "B. AWS Trusted Advisor",
          "C. Amazon Inspector",
          "D. AWS X-Ray"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is moving its office and must establish an encrypted connection to AWS.\nWhich AWS service will help meet this requirement?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS VPN",
          "B. Amazon Route 53",
          "C. Amazon API Gateway",
          "D. Amazon Connect"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs steady and predictable performance from its Amazon EC2 instances at the lowest possible cost. The company also needs the ability to scale resources to ensure that it has the right resources available at the right time.\nWhich AWS service or resource will meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon CloudWatch",
          "B. Application Load Balancer",
          "C. AWS Batch",
          "D. Amazon EC2 Auto Scaling"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which action will provide documentation to help a company evaluate whether its use of the AWS Cloud is compliant with local regulatory standards?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Running Amazon GuardDuty",
          "B. Using AWS Artifact",
          "C. Creating an AWS Support ticket",
          "D. Evaluating AWS CloudTrail logs"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants a cost-effective option when running its applications in an Amazon EC2 instance for short time periods. The applications can be interrupted.\nWhich EC2 instance type will meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Spot Instances",
          "B. On-Demand Instances",
          "C. Reserved Instances",
          "D. Dedicated Instances"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A retail company is building a new mobile app. The company is evaluating whether to build the app at an on-premises data center or in the AWS Cloud.\nWhich of the following are benefits of building this app in the AWS Cloud? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. A large, upfront capital expense and low variable expenses",
          "B. Increased speed for trying out new projects",
          "C. Complete control over the physical security of the infrastructure",
          "D. Flexibility to scale up in minutes as the application becomes popular",
          "E. Ability to pick the specific data centers that will host the application servers"
        ],
        "correctAnswer": [
          2,
          4
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A developer is working on enhancing applications at AWS. The developer needs a service that can securely host GitHub-based code, repositories, and version controls.\nWhich AWS service should the developer use?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS CodeStar",
          "B. Amazon CodeGuru",
          "C. AWS CodeCommit",
          "D. AWS CodePipeline"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "What is an AWS Region?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. A broad set of global, cloud-based products that include compute, storage, and databases",
          "B. A physical location around the world where data centers are clustered",
          "C. One or more discrete data centers with redundant power, networking, and connectivity",
          "D. A service that developers use to build applications that deliver latencies of single-digit milliseconds to users"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS benefit enables users to deploy cloud infrastructure that consists of multiple geographic regions connected by a network with low latency, high throughput, and redundancy?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Economies of scale",
          "B. Security",
          "C. Elasticity",
          "D. Global reach"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company is considering a migration from on premises to the AWS Cloud. The company's IT team needs to offload support of the workload.\nWhat should the IT team do to accomplish this goal?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Use AWS Managed Services to provision, run, and support the company infrastructure.",
          "B. Build hardware refreshes into the operational calendar to ensure availability.",
          "C. Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 instances.",
          "D. Overprovision compute capacity for seasonal events and traffic spikes to prevent downtime."
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "What is a benefit of using AWS serverless computing?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Application deployment and management are not required.",
          "B. Application security will be fully managed by AWS.",
          "C. Monitoring and logging are not needed.",
          "D. Management of infrastructure is offloaded to AWS."
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company plans to launch an application that will run in multiple locations within the United States. The company needs to identify the two AWS Regions where the application can operate at the lowest price.\nWhich AWS service or feature should the company use to determine the Regions that offer the lowest price?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Cost Explorer",
          "B. AWS Budgets",
          "C. AWS Trusted Advisor",
          "D. AWS Pricing Calculator"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which approach will enhance a user's security on AWS?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Use Multi-AZ deployments with Amazon RDS.",
          "B. Create a hybrid architecture by using AWS Direct Connect.",
          "C. Monitor application-specific information with AWS X-Ray.",
          "D. Encrypt data by using AWS Key Management Service (AWS KMS)."
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service or tool is associated with an Amazon EC2 instance and acts as a virtual firewall to control inbound and outbound traffic?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS WAF",
          "B. AWS Shield",
          "C. Network access control list (ACL)",
          "D. Security group"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to migrate its on-premises Microsoft SQL Server database server to the AWS Cloud. The company has decided to use Amazon EC2 instances to run this database.\nWhich of the following is the company responsible for managing, according to the AWS shared responsibility model?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. EC2 hypervisor",
          "B. Security patching of the guest operating system",
          "C. Network connectivity of the host server",
          "D. Uptime service level agreement (SLA) for the EC2 instances"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A developer wants to deploy an application on a container-based service. The service must automatically provision and manage the backend instances. The service must provision only the necessary resources.\nWhich AWS service will meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon EC2",
          "B. Amazon Lightsail",
          "C. Amazon Elastic Kubernetes Service (Amazon EKS)",
          "D. AWS Fargate"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which tasks require use of the AWS account root user? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Changing an AWS Support plan",
          "B. Modifying an Amazon EC2 instance type",
          "C. Grouping resources in AWS Systems Manager",
          "D. Running applications in Amazon Elastic Kubernetes Service (Amazon EKS)",
          "E. Closing an AWS account"
        ],
        "correctAnswer": [
          1,
          5
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service enables the decoupling and scaling of applications?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon Simple Queue Service (Amazon SQS)",
          "B. AWS Outposts",
          "C. Amazon S3",
          "D. Amazon Simple Email Service (Amazon SES)"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following describes some of the core functionality of Amazon S3?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2.",
          "B. Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability.",
          "C. Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry-standard SMB protocol.",
          "D. Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources."
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "How does consolidated billing help reduce costs for a company that has multiple AWS accounts?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. It aggregates usage across accounts so that the company can reach volume discount thresholds sooner.",
          "B. It offers an additional 5% discount on purchases of All Upfront Reserved Instances.",
          "C. It provides a simplified billing invoice that the company can process more quickly than a standard invoice.",
          "D. It gives AWS resellers the ability to bill their customers for usage."
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to secure its consumer web application by using SSL/TLS to encrypt traffic.\nWhich AWS service can the company use to meet this goal?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS WAF",
          "B. AWS Shield",
          "C. Amazon VPC",
          "D. AWS Certificate Manager (ACM)"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following are advantages of moving to the AWS Cloud? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Users can implement all AWS services in seconds.",
          "B. AWS assumes all responsibility for the security of infrastructure and applications.",
          "C. Users experience increased speed and agility.",
          "D. Users benefit from massive economies of scale.",
          "E. Users can move hardware from their data center to the AWS Cloud."
        ],
        "correctAnswer": [
          3,
          4
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company stores configuration files in an Amazon S3 bucket. These configuration files must be accessed by applications that are running on Amazon EC2 instances.\nAccording to AWS security best practices, how should the company grant permissions to allow the applications for access the S3 bucket?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Use the AWS account root user access keys.",
          "B. Use the AWS access key ID and the EC2 secret access key.",
          "C. Use an IAM role with the necessary permissions.",
          "D. Activate multi-factor authentication (MFA) and versioning on the S3 bucket."
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs an AWS service that will continuously monitor the company's AWS account for suspicious activity. The service must have the ability to initiate automated actions against threats that are identified in the security findings.\nWhich service will meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Trusted Advisor",
          "B. Amazon Detective",
          "C. Amazon Inspector",
          "D. Amazon GuardDuty"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to analyze streaming user data and respond to customer queries in real time.\nWhich AWS service can meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon QuickSight",
          "B. Amazon Redshift",
          "C. Amazon Kinesis Data Analytics",
          "D. AWS Data Pipeline"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Who can create and manage access keys for an AWS account root user?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. The AWS account owner",
          "B. An IAM user that has administrator permissions",
          "C. IAM users within a designated group",
          "D. An IAM user that has the required role"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service can help a company detect an outage of its website servers and redirect users to alternate servers?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon CloudFront",
          "B. Amazon GuardDuty",
          "C. Amazon Route 53",
          "D. AWS Trusted Advisor"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS.\nWhich security measures fall under the responsibility of AWS? (Choose two.)\n",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "A. Running a virus scan on EC2 instances",
          "B. Protecting against IP spoofing and packet sniffing",
          "C. Installing the latest security patches on the RDS instance",
          "D. Encrypting communication between the EC2 instances and the Elastic Load Balancer",
          "E. Configuring a security group and a network access control list (NACL) for EC2 instances"
        ],
        "correctAnswer": [
          2,
          3
        ],
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which of the following is an AWS Well-Architected Framework design principle for operational excellence in the AWS Cloud?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Go global in minutes.",
          "B. Make frequent, small, reversible changes.",
          "C. Implement a strong foundation of identity and access management.",
          "D. Stop spending money on hardware infrastructure for data center operations."
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service provides intelligent recommendations to improve code quality and identify an application's most expensive lines of code?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon CodeGuru",
          "B. AWS CodeStar",
          "C. AWS CodeCommit",
          "D. AWS CodeDeploy"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company wants to expand from one AWS Region into a second AWS Region.\nWhat does the company need to do to expand into the second Region?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Contact an AWS account manager to sign a new contract.",
          "B. Move an Availability Zone to the second Region.",
          "C. Begin to deploy resources in the second Region.",
          "D. Download the AWS Management Console for the second Region."
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "Which AWS service provides storage that can be mounted across multiple Amazon EC2 instances?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Amazon WorkSpaces",
          "B. Amazon Elastic File System (Amazon EFS)",
          "C. AWS Database Migration Service (AWS DMS)",
          "D. AWS Snowball Edge"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company needs to deploy applications in the AWS Cloud as quickly as possible. The company also needs to minimize the complexity that is related to the management of AWS resources.\nWhich AWS service should the company use to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. AWS Config",
          "B. AWS Elastic Beanstalk",
          "C. Amazon EC2",
          "D. Amazon Personalize"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      },
      {
        "question": "A company has a set of databases that are stored on premises. The company wants to bring its existing Microsoft SQL Server licenses when the company moves the databases to run on Amazon EC2 instances.\nWhich EC2 instance purchasing option should the company use to meet these requirements?\n",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "A. Dedicated Instances",
          "B. Reserved Instances",
          "C. Dedicated Hosts",
          "D. Spot Instances"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Mai visto un mostro come te, mi fai paura!",
        "messageForIncorrectAnswer": "Lascia perdere che è mejo.",
        "point": "20"
      }
  ]
}