const ideaData = [
    {
      id: 1,
      ideaName: "Color Scheme Generator",
      ideaDescription: "A website that generates color schemes based on user dialogue.",
      projectTags: "AI, Web Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "ColorEnjoyer",
      submittedOn: "2024-03-15"
    },
    {
      id: 2,
      ideaName: "Image to Text Converter Extension",
      ideaDescription: "Web extension to extract text from screenshots.",
      projectTags: "ML, Extension Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "CaffeineAddict",
      submittedOn: "2024-03-16"
    },
    {
      id: 3,
      ideaName: "AI Finance Assistant",
      ideaDescription: "Analyzes your bank statements and provides financial insights.",
      projectTags: "AI, Web Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "ZenMaster",
      submittedOn: "2024-03-17"
    },
    {
      id: 4,
      ideaName: "AI Reminder Alarm Bot",
      ideaDescription: "An app that reminds you of an alarm with speech, responds accordingly and convincingly.",
      projectTags: "AI, App Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "InteriorDesignPro",
      submittedOn: "2024-03-18"
    },
    {
      id: 5,
      ideaName: "AI Self Driving Toy Car",
      ideaDescription: "Practice robot vision, use sensors to make a toy car that avoids obstacles.",
      projectTags: "AI, Robotics, Computer Vision",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "AudioPhile",
      submittedOn: "2024-03-19"
    },
    {
      id: 6,
      ideaName: "AI Surveillance System",
      ideaDescription: "A surveillance system that records and optionally alerts any outside human movement.",
      projectTags: "AI, Computer Vision",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "GreenThumb",
      submittedOn: "2024-03-20"
    },
    {
      id: 7,
      ideaName: "Stock Price Prediction",
      ideaDescription: "Predict the price of a stock based on historical data.",
      projectTags: "ML, Web Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "ChocoholicDreams",
      submittedOn: "2024-03-21"
    },
    {
      id: 8,
      ideaName: "Customer Segmentation Analysis",
      ideaDescription: "Differentiate customers into groups based on data.",
      projectTags: "ML, Web Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "Wanderluster",
      submittedOn: "2024-03-22"
    },
    {
      id: 9,
      ideaName: "Product Recommendation System",
      ideaDescription: "Recommend products to customers based on data.",
      projectTags: "ML, Web Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "FutureTechFan",
      submittedOn: "2024-03-23"
    },
    {
      id: 10,
      ideaName: "House Price Prediction",
      ideaDescription: "Predict home prices based on data.",
      projectTags: "ML, Web Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "GourmetGrazer",
      submittedOn: "2024-03-24"
    },
    {
      id: 11,
      ideaName: "Markdown Editor",
      ideaDescription: "A markdown editor with a tutorial for practice.",
      projectTags: "Web Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "TechGadgetLover",
      submittedOn: "2024-03-25"
    },
    {
      id: 12,
      ideaName: "VS Code Markdown Reference Extension",
      ideaDescription: "An extension to help us remember how to make markdown files.",
      projectTags: "Extension Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "CaffeineAddict",
      submittedOn: "2024-03-26"
    },
    {
      id: 13,
      ideaName: "Theoretical Stock Plays + Stock Simulation",
      ideaDescription: "A website to make theoretical stock plays and run random stock simulations.",
      projectTags: "Web Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "RetroGamer",
      submittedOn: "2024-03-27"
    },
    {
      id: 14,
      ideaName: "Python Code Collaboration Platform",
      ideaDescription: "An alternative to Replit only for Python programming and team collaborating.",
      projectTags: "Web Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "InteriorDesignPro",
      submittedOn: "2024-03-28"
    },
    {
      id: 15,
      ideaName: "AI Mimic Bot",
      ideaDescription: "A bot dynamically trained on user text data, the mimic bot respond to texts like the user.",
      projectTags: "AI, App Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "AudioPhile",
      submittedOn: "2024-03-29"
    },
    {
      id: 16,
      ideaName: "Amazon Clone",
      ideaDescription: "A comprehensive Amazon clone website.",
      projectTags: "Web Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "InteriorDesignPro",
      submittedOn: "2024-03-29"
    },
    {
      id: 17,
      ideaName: "Interactive Data Visualizer",
      ideaDescription: "A desktop extension to interact with data from CSV files and alter it efficiently.",
      projectTags: "Desktop Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "SneakerHead",
      submittedOn: "2024-03-29"
    },
    {
      id: 18,
      ideaName: "Live Messaging App + Two Way Video Chat",
      ideaDescription: "An app to communicate with others in multiple ways.",
      projectTags: "App Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "QuarantineCooker",
      submittedOn: "2024-03-29"
    },
    {
      id: 19,
      ideaName: "Black and Gray VS Code Theme Extension",
      ideaDescription: "An extension to challenge those who are above the aid of syntax colors.",
      projectTags: "Extension Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "MusicLover",
      submittedOn: "2024-03-29"
    },
    {
      id: 20,
      ideaName: "What Icons? VS Code Extension",
      ideaDescription: "An extension for those above the appeal of file icons.",
      projectTags: "Extension Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "KetoLover",
      submittedOn: "2024-03-29"
    },
    {
      id: 21,
      ideaName: "Curse of the Blind VS Code Extension",
      ideaDescription: "An extension for those above colors and visual aids.",
      projectTags: "Extension Development",
      image: "https://imageplaceholder.net/600x400/eeeeee",
      submittedBy: "UrbanGardener",
      submittedOn: "2024-04-09"  
    }
  ];
  
  export default ideaData;