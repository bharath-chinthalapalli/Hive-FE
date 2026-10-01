export interface DesignCriteria {
    mapSize: {
      value: string;
      complexity: {
        base: string;
        exponent: string;
      }[];
      note: string;
    };
    encryptionKeySize: {
      value: string;
      complexity: {
        base: string;
        exponent: string;
      }[];
      note: string;
    };
  }
  
  export interface AttackAnalysis {
    id: string;
    name: string;
    description: string;
    impact: string;
  }
  