

export interface Chef {
    _id: number
    name: string;
    _type: "chef"
    position: string;
    experience: number;
    specialty: string;
    image?: {
        asset : {
            _ref: string
            _type: "image"
        }
    }
    description: string;
    available: boolean;
  }