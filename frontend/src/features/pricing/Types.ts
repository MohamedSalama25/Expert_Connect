export interface PlanFeature {
    text: string;
    included: boolean;
}

export interface PricingPlan {
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    cta: string;
    popular?: boolean;
    features: PlanFeature[];
}
