export interface Clients {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  isActive?: boolean;
  /**
    trial_end_date 
    subscription_plan
    subscription_status 
    subscription_start_date 
    subscription_end_date
    billing_details
   */
  meta?: {};
}

export interface ClientsInput {
  name: string;
  meta?: {};
}
