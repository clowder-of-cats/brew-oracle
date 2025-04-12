interface CoffeeData {
  cuppingNotes: Array<{
    origin: string;
    flavor: string[];
    acidity: number;
    body: number;
    notes: string;
  }>;
  brewRecipes: Array<{
    method: string;
    ratio: string;
    grindSize: string;
    time: string;
    temperature: string;
    steps: string[];
  }>;
  grinderInfo: Array<{
    type: string;
    bestFor: string[];
    maintenance: string[];
    settings: string;
  }>;
  troubleshooting: Array<{
    problem: string;
    possibleCauses: string[];
    solutions: string[];
  }>;
}

export const coffeeKnowledge: CoffeeData = {
  cuppingNotes: [
    {
      origin: "Ethiopian Yirgacheffe",
      flavor: ["Floral", "Citrus", "Bergamot"],
      acidity: 8,
      body: 5,
      notes: "Delicate tea-like body with jasmine and citrus notes"
    },
    {
      origin: "Colombian Supremo",
      flavor: ["Chocolate", "Caramel", "Nuts"],
      acidity: 6,
      body: 7,
      notes: "Well-balanced with sweet chocolate and nutty undertones"
    }
  ],
  brewRecipes: [
    {
      method: "Pour Over",
      ratio: "1:16 (coffee to water)",
      grindSize: "Medium",
      time: "2:30-3:00",
      temperature: "200°F (93°C)",
      steps: [
        "Rinse filter with hot water",
        "Add ground coffee",
        "Pour 50g water for bloom",
        "Wait 30 seconds",
        "Continue pouring in circular motion"
      ]
    },
    {
      method: "French Press",
      ratio: "1:12",
      grindSize: "Coarse",
      time: "4:00",
      temperature: "200°F (93°C)",
      steps: [
        "Add coarse ground coffee",
        "Pour hot water",
        "Stir gently",
        "Wait 4 minutes",
        "Press plunger slowly"
      ]
    }
  ],
  grinderInfo: [
    {
      type: "Burr Grinder",
      bestFor: ["Pour Over", "French Press", "Espresso"],
      maintenance: [
        "Clean burrs monthly",
        "Calibrate settings quarterly",
        "Replace burrs every 1-2 years"
      ],
      settings: "40 steps of adjustment from fine to coarse"
    }
  ],
  troubleshooting: [
    {
      problem: "Bitter Coffee",
      possibleCauses: [
        "Water too hot",
        "Over-extraction",
        "Grind too fine"
      ],
      solutions: [
        "Reduce water temperature to 195-205°F",
        "Decrease brewing time",
        "Use coarser grind setting"
      ]
    },
    {
      problem: "Sour Coffee",
      possibleCauses: [
        "Water too cool",
        "Under-extraction",
        "Grind too coarse"
      ],
      solutions: [
        "Increase water temperature",
        "Increase brewing time",
        "Use finer grind setting"
      ]
    }
  ]
};
