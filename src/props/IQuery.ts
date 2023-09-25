
export interface IQuery {
    filters?: IFilter[];
    sorting?: any[]; 
    pagination?: IPagination;
    includes?: string[];
}

interface IFilter {
    name : string;
    type : string;
    value : IValueQuery;
}

interface IValueQuery { 
    startDate:any;
    endDate:any;
} 


interface IPagination { 
    page:number; 
    limit:number;
    itemsOnPage:number;
} 

