export const filterData = [ {name:"Ride",image: require('../../assets/ride.png'), id:"0"},
                            {name:"Food",image:require("../../assets/food.png"),id:"1"},
                            {name:"Package",image:require("../../assets/package.png"),id:"2"},
                            {name:"Reserve",image:require("../../assets/reserve.png"),id:"3"}
                          
                           ];


export const rideData =[
    {street:"32 Olivia Rd",area:"Klipfontein 83-Ir,Boksburg",id:"0"},
    {street:"Hughes Industrial Park",area:"Hughes,Boksburg",id:"1"},
    {street:"32 Olivia Road",area:" East Rand,Ekurhuleni,Gauteng,1459",id:"2"},
    {street:"Total Boksburg",area:"35 Atlas Rd,Anderbolt,Boksburg",id:"3"},
    {street:"179 8th Ave",area:"Bezuidenhout Valley,Johannesburg",id:"4"},
];






export const carTypeData =[
    {vehicleType:"Tuk-Tuk", image: require('../../assets/d9c73f381043ee7aa3af24f102d4bb1d.jpg'),  time:"3",  fare:"1200",  distance:"21", id:"1"},
    {vehicleType:"Pick-Up", image: require('../../assets/OIP.jpg'), time:"",  fare:"",  distance:"21", id:"2"},
    {vehicleType:"Truck",image: require('../../assets/th.jpg'), time:"",  fare:"",  distance:"", id:"3"},
   
];





 export const requestData = [{
    name:"For Me",id:0
},
{
    name:"For Someone",id:1
}

]

export const rideOptions = [{name:"Personal",icon:"account", id:"0"},
{name:"Business",icon:"briefcase", id:"1"},  

];

export const paymentOptions = [{image:require('../../assets/visaIcon.png'),text:"Visa ...0476"},
                                {image:require('../../assets/cashIcon.png'),text:"Cash"}]

export const availableServices = ["Uber Go","UberX","Uber connect","Uber Black","Uber Van","Uber Assist"]

export const carsAround = [{latitude:-0.0103090,longitude:34.756060},
    {latitude:-0.107805,longitude:34.755936},
    {latitude:-0.104932,longitude:34.765108},
    {latitude:-0.112141,longitude:34.753012},
    {latitude:-0.101412,longitude:34.753441},
]
export const carsAround1 = [{latitude:-0.0103090,longitude:34.756060}
]

export const Rides = [
    {id:"1",CarTypeDataId:"2",proximity:"15",IsIdle:0,  name:"Jones" ,phoneNumber:"0793831331", latitude:-0.107805,longitude:34.755936},
    {id:"1",CarTypeDataId:"3",proximity:"20",IsIdle:1,   name:"Kim" , phoneNumber:"0112983323",latitude:-0.107805,longitude:34.755936},
    {id:"1",CarTypeDataId:"1", proximity:"1",IsIdle:0 , name:"Kelly" ,phoneNumber:"2123213223", latitude:-0.107805,longitude:34.755936},
    {id:"2",CarTypeDataId:"3", proximity:"6",IsIdle:1, name:"Lont" ,phoneNumber:"21321321323", latitude:-0.107805,longitude:34.755936},
    {id:"2",CarTypeDataId:"2", proximity:"16",IsIdle:0, name:"Kent" ,phoneNumber:"213121321323", latitude:-0.107805,longitude:34.755936},
    {id:"2",CarTypeDataId:"1", proximity:"4",IsIdle:1, name:"Laura" ,phoneNumber:"21322131323", latitude:-0.107805,longitude:34.755936},
    {id:"3",CarTypeDataId:"3", proximity:"2",IsIdle:1, name:"Lynne" ,phoneNumber:"21321321323", latitude:-0.107805,longitude:34.755936},
    {id:"3",CarTypeDataId:"1", proximity:"56",IsIdle:0, name:"Lowi" ,phoneNumber:"21324431323", latitude:-0.107805,longitude:34.755936}
]
