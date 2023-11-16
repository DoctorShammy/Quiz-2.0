
const quizQuestions = [
    {
      id: 'question1',
      text: '1. Which customers are considered the best type of customers for Myrspoven’s solutions? (tick all that apply)',
      options: [
        { id: 'a', text: 'A retailer with 200 shops, average sqm 4000 sqm' },
        { id: 'b', text: 'A retailer with 4 shopping malls, average 50000 sqm' },
        { id: 'c', text: 'A real estate owner focusing on offices average 20000 sqm' },
        { id: 'd', text: 'A real estate owner focusing on residential average 10000 sqm' }
    ],
      correctAnswer: ['b', 'c' ],
      maxChoices: 2
    },
    {
        id: 'question2',
        text: 'What should you look for in a customer? (tick all that apply)',
        options: [
          { id: 'a', text: 'Big portfolio with small average size of buildings' },
          { id: 'b', text: 'Big average size of buildings in a portfolio' },
          { id: 'c', text: 'Customers who are just starting their digitization journey' },
          { id: 'd', text: 'Customers with clear sustainability goals' }
      ],
        correctAnswer: ['b', 'd' ],
        maxChoices: 2
      },
      {
        id: 'question3',
        text: 'What attributes are important when choosing what building to optimize? (tick all that apply)',
        options: [
          { id: 'a', text: 'High number of technical systems' },
          { id: 'b', text: 'Buildings with low number of technical systems          ' },
          { id: 'c', text: 'Buildings with an excessively large proportion of VAV (variable air volume)          ' },
          { id: 'd', text: 'Buildings with varied use' }
      ],
        correctAnswer: ['a', 'd' ],
        maxChoices: 2
      },
      {
        id: 'question4',
        text: 'Which buildings are the optimal to optimize (tier 1)? (Tick all that apply)',
        options: [
          { id: 'a', text: 'Offices' },
          { id: 'b', text: 'Shops' },
          { id: 'c', text: 'Airports' },
          { id: 'd', text: 'Shopping malls' }
      ],
        correctAnswer: ['a', 'c', 'd' ],
        maxChoices: 3
      },      
      {
        id: 'question5',
        text: 'Which buildings need more investigation before proceeding? (tick all that apply)        ',
        options: [
          { id: 'a', text: 'Shopping malls' },
          { id: 'b', text: 'Train stations' },
          { id: 'c', text: 'Logistics facilities' },
          { id: 'd', text: 'Hospitals' }
      ],
        correctAnswer: ['b', 'c', 'd' ],
        maxChoices: 3
      },      
      {
        id: 'question6',
        text: 'Which type of building should you avoid? (tick all that apply)        ',
        options: [
          { id: 'a', text: 'Elderly care facilities' },
          { id: 'b', text: 'Schools' },
          { id: 'c', text: 'Ice rinks' },
          { id: 'd', text: 'Swimming pools' }
      ],
        correctAnswer: ['c', 'd' ],
        maxChoices: 2
      },      
      {
        id: 'question7',
        text: 'What attributes should you avoid? (tick all that apply)',
        options: [
          { id: 'a', text: 'Building with specific requirements on the indoor climate, like ice rinks or swimming pools' },
          { id: 'b', text: 'Buildings with an excessively large proportion of VAV (variable air volume)' },
          { id: 'c', text: 'Small individual buildings in a portfolio' },
          { id: 'd', text: 'Military facilities' }
      ],
        correctAnswer: ['a', 'b','c', 'd' ],
        maxChoices: 4
      },
      ]