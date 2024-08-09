const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Hardcoded data for questions
const questionData = {
  english: [
    {
      question: "What ___ when I called?",
      options: [
        { question: "Was you doing", isSelected: false },
        { question: "Was you do", isSelected: false },
        { question: "Were you doing", isSelected: false },
        { question: "You were doing", isSelected: false },
      ],
      answer: "Were you doing",
    },
    {
      question: "Which word form is not correct?",
      options: [
        { question: "Clotheful", isSelected: false },
        { question: "Clothing", isSelected: false },
        { question: "Clothed", isSelected: false },
        { question: "Clothe", isSelected: false },
      ],
      answer: "Clotheful",
    },
    {
      question: "Choose the correct sentence:",
      options: [
        { question: "She don't like apples.", isSelected: false },
        { question: "She doesn't likes apples.", isSelected: false },
        { question: "She doesn't like apples.", isSelected: false },
        { question: "She don't likes apples.", isSelected: false },
      ],
      answer: "She doesn't like apples",
    },
    {
      question: "Which is the correct past tense?",
      options: [
        { question: "He runned fast.", isSelected: false },
        { question: "He ran fast.", isSelected: false },
        { question: "He rans fast.", isSelected: false },
        { question: "He run fast.", isSelected: false },
      ],
      answer: "He ran fast",
    },
    {
      question: "What is the plural of 'child'?",
      options: [
        { question: "Childs", isSelected: false },
        { question: "Childrens", isSelected: false },
        { question: "Children", isSelected: false },
        { question: "Childes", isSelected: false },
      ],
      answer: "Children",
    },
    {
      question: "Which word is an adverb?",
      options: [
        { question: "Quickly", isSelected: false },
        { question: "Quick", isSelected: false },
        { question: "Quicker", isSelected: false },
        { question: "Quickness", isSelected: false },
      ],
      answer: "Quickly",
    },
    {
      question: "Identify the synonym of 'happy'.",
      options: [
        { question: "Sad", isSelected: false },
        { question: "Joyful", isSelected: false },
        { question: "Angry", isSelected: false },
        { question: "Tired", isSelected: false },
      ],
      answer: "Joyful",
    },
    {
      question: "Which sentence is in the passive voice?",
      options: [
        { question: "The cat chased the mouse.", isSelected: false },
        { question: "The mouse was chased by the cat.", isSelected: false },
        { question: "The cat is chasing the mouse.", isSelected: false },
        { question: "The mouse chases the cat.", isSelected: false },
      ],
      answer: "The mouse was chased by the cat",
    },
    {
      question: "Which word is a noun?",
      options: [
        { question: "Run", isSelected: false },
        { question: "Beautiful", isSelected: false },
        { question: "Happiness", isSelected: false },
        { question: "Quickly", isSelected: false },
      ],
      answer: "Happiness",
    },
    {
      question: "Select the correct question form:",
      options: [
        { question: "You are coming?", isSelected: false },
        { question: "Are you coming?", isSelected: false },
        { question: "You coming?", isSelected: false },
        { question: "Is you coming?", isSelected: false },
      ],
      answer: "Are you coming?",
    },
  ],
  hindi: [
    {
      question: "भारत का राष्ट्रीय पशु कौन सा है?",
      options: [
        { question: "शेर", isSelected: false },
        { question: "हाथी", isSelected: false },
        { question: "बाघ", isSelected: false },
        { question: "गाय", isSelected: false },
      ],
      answer: "बाघ",
    },
    {
      question: "महात्मा गांधी का जन्मदिन कब मनाया जाता है?",
      options: [
        { question: "26 जनवरी", isSelected: false },
        { question: "15 अगस्त", isSelected: false },
        { question: "2 अक्टूबर", isSelected: false },
        { question: "14 नवम्बर", isSelected: false },
      ],
      answer: "2 अक्टूबर",
    },
    {
      question: "गंगा नदी कहाँ से निकलती है?",
      options: [
        { question: "यमुना", isSelected: false },
        { question: "हिमालय", isSelected: false },
        { question: "अरावली", isSelected: false },
        { question: "सतलुज", isSelected: false },
      ],
      answer: "हिमालय",
    },
    {
      question: "रामायण के लेखक कौन हैं?",
      options: [
        { question: "व्यास", isSelected: false },
        { question: "तुलसीदास", isSelected: false },
        { question: "कबीर", isSelected: false },
        { question: "सूरदास", isSelected: false },
      ],
      answer: "तुलसीदास",
    },
    {
      question: "भारत का राष्ट्रीय फूल कौन सा है?",
      options: [
        { question: "गुलाब", isSelected: false },
        { question: "कमल", isSelected: false },
        { question: "सूरजमुखी", isSelected: false },
        { question: "चमेली", isSelected: false },
      ],
      answer: "कमल",
    },
    {
      question: "भारत का सबसे बड़ा राज्य कौन सा है?",
      options: [
        { question: "उत्तर प्रदेश", isSelected: false },
        { question: "महाराष्ट्र", isSelected: false },
        { question: "राजस्थान", isSelected: false },
        { question: "बिहार", isSelected: false },
      ],
      answer: "राजस्थान",
    },
    {
      question: "ताजमहल किसने बनवाया था?",
      options: [
        { question: "अकबर", isSelected: false },
        { question: "जहाँगीर", isSelected: false },
        { question: "शाहजहाँ", isSelected: false },
        { question: "औरंगजेब", isSelected: false },
      ],
      answer: "शाहजहाँ",
    },
    {
      question: "भारत का राष्ट्रीय गीत कौन सा है?",
      options: [
        { question: "जन गण मन", isSelected: false },
        { question: "वन्दे मातरम्", isSelected: false },
        { question: "सारे जहाँ से अच्छा", isSelected: false },
        { question: "जय हो", isSelected: false },
      ],
      answer: "वन्दे मातरम्",
    },
    {
      question: "हिमालय की सबसे ऊँची चोटी कौन सी है?",
      options: [
        { question: "कंचनजंगा", isSelected: false },
        { question: "एवरेस्ट", isSelected: false },
        { question: "नंदा देवी", isSelected: false },
        { question: "धौलागिरी", isSelected: false },
      ],
      answer: "एवरेस्ट",
    },
    {
      question: "स्वतंत्रता संग्राम के दौरान भारत के वायसराय कौन थे?",
      options: [
        { question: "लॉर्ड कर्ज़न", isSelected: false },
        { question: "लॉर्ड माउंटबेटन", isSelected: false },
        { question: "लॉर्ड वेलेजली", isSelected: false },
        { question: "लॉर्ड लिटन", isSelected: false },
      ],
      answer: "लॉर्ड माउंटबेटन",
    },
  ],
  math: [
    {
      question: "What is the value of π (pi)?",
      options: [
        { question: "3.14", isSelected: false },
        { question: "3.15", isSelected: false },
        { question: "3.16", isSelected: false },
        { question: "3.17", isSelected: false },
      ],
      answer: "3.14",
    },
    {
      question: "What is 2 + 2?",
      options: [
        { question: "3", isSelected: false },
        { question: "4", isSelected: false },
        { question: "5", isSelected: false },
        { question: "6", isSelected: false },
      ],
      answer: "4",
    },
    {
      question: "What is the square root of 81?",
      options: [
        { question: "7", isSelected: false },
        { question: "8", isSelected: false },
        { question: "9", isSelected: false },
        { question: "10", isSelected: false },
      ],
      answer: "9",
    },
    {
      question: "Solve for x: 2x + 3 = 7",
      options: [
        { question: "x = 1", isSelected: false },
        { question: "x = 2", isSelected: false },
        { question: "x = 3", isSelected: false },
        { question: "x = 4", isSelected: false },
      ],
      answer: "x = 2",
    },
    {
      question: "What is 10% of 200?",
      options: [
        { question: "10", isSelected: false },
        { question: "20", isSelected: false },
        { question: "30", isSelected: false },
        { question: "40", isSelected: false },
      ],
      answer: "20",
    },
    {
      question: "What is the area of a rectangle with length 5 and width 4?",
      options: [
        { question: "10", isSelected: false },
        { question: "15", isSelected: false },
        { question: "20", isSelected: false },
        { question: "25", isSelected: false },
      ],
      answer: "20",
    },
    {
      question: "What is the result of 3^2?",
      options: [
        { question: "6", isSelected: false },
        { question: "9", isSelected: false },
        { question: "12", isSelected: false },
        { question: "15", isSelected: false },
      ],
      answer: "9",
    },
    {
      question:
        "If a triangle has sides 3, 4, and 5, what type of triangle is it?",
      options: [
        { question: "Equilateral", isSelected: false },
        { question: "Isosceles", isSelected: false },
        { question: "Scalene", isSelected: false },
        { question: "Right-angled", isSelected: false },
      ],
      answer: "Right-angled",
    },
    {
      question: "What is the formula for the area of a circle?",
      options: [
        { question: "πr^2", isSelected: false },
        { question: "2πr", isSelected: false },
        { question: "πr", isSelected: false },
        { question: "r^2", isSelected: false },
      ],
      answer: "πr^2",
    },
    {
      question: "What is 15 multiplied by 3?",
      options: [
        { question: "30", isSelected: false },
        { question: "35", isSelected: false },
        { question: "40", isSelected: false },
        { question: "45", isSelected: false },
      ],
      answer: "45",
    },
  ],
  science: [
    {
      question: "What is the chemical symbol for water?",
      options: [
        { question: "H2O", isSelected: false },
        { question: "O2", isSelected: false },
        { question: "CO2", isSelected: false },
        { question: "NaCl", isSelected: false },
      ],
      answer: "H2O",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: [
        { question: "Earth", isSelected: false },
        { question: "Mars", isSelected: false },
        { question: "Jupiter", isSelected: false },
        { question: "Venus", isSelected: false },
      ],
      answer: "Mars",
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      options: [
        { question: "Oxygen", isSelected: false },
        { question: "Carbon Dioxide", isSelected: false },
        { question: "Nitrogen", isSelected: false },
        { question: "Hydrogen", isSelected: false },
      ],
      answer: "Carbon Dioxide",
    },
    {
      question: "What is the process by which plants make their food?",
      options: [
        { question: "Respiration", isSelected: false },
        { question: "Photosynthesis", isSelected: false },
        { question: "Transpiration", isSelected: false },
        { question: "Digestion", isSelected: false },
      ],
      answer: "Photosynthesis",
    },
    {
      question: "Which organ in the human body pumps blood?",
      options: [
        { question: "Brain", isSelected: false },
        { question: "Lungs", isSelected: false },
        { question: "Heart", isSelected: false },
        { question: "Kidneys", isSelected: false },
      ],
      answer: "Heart",
    },
    {
      question: "What is the center of an atom called?",
      options: [
        { question: "Proton", isSelected: false },
        { question: "Neutron", isSelected: false },
        { question: "Nucleus", isSelected: false },
        { question: "Electron", isSelected: false },
      ],
      answer: "Nucleus",
    },
    {
      question: "What is the boiling point of water?",
      options: [
        { question: "90°C", isSelected: false },
        { question: "100°C", isSelected: false },
        { question: "110°C", isSelected: false },
        { question: "120°C", isSelected: false },
      ],
      answer: "100°C",
    },
    {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: [
        { question: "Oxygen", isSelected: false },
        { question: "Nitrogen", isSelected: false },
        { question: "Carbon Dioxide", isSelected: false },
        { question: "Helium", isSelected: false },
      ],
      answer: "Nitrogen",
    },
    {
      question: "What force pulls objects towards the Earth?",
      options: [
        { question: "Magnetism", isSelected: false },
        { question: "Friction", isSelected: false },
        { question: "Gravity", isSelected: false },
        { question: "Electricity", isSelected: false },
      ],
      answer: "Gravity",
    },
    {
      question: "Which part of the plant conducts photosynthesis?",
      options: [
        { question: "Roots", isSelected: false },
        { question: "Stem", isSelected: false },
        { question: "Leaves", isSelected: false },
        { question: "Flowers", isSelected: false },
      ],
      answer: "Leaves",
    },
  ],
};

// API endpoint to get question list based on type
app.get("/getQuestionList", (req, res) => {
  const { type } = req.query;

  if (type && questionData[type]) {
    res.json({
      success: true,
      data: questionData[type],
    });
  } else {
    res.json({
      success: false,
      message: "Invalid type provided or no questions found.",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
