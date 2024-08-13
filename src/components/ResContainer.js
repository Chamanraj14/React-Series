import { CDN_LINK } from "../utils/constants";
const ResContainer = (props) =>{
    const {resData} = props;
    const {name, avgRating, cuisines, areaName} = resData?.info;
    return (
        <div className="p-4 m-4 w-[200px] hover:bg-slate-300 hover:shadow-lg  boarder rounded-md text-wrap">
            <img alt="border rounded-sm" src={ CDN_LINK+resData.info.cloudinaryImageId}/> 
            <h3 className="font-bold">{name}</h3>
            <h4>Ratings : {avgRating}⭐</h4>
            {/*<h4 >{cuisines.join(",")} </h4>*/}
            <h4>{areaName}</h4>
        </div>
    )
}
//cloudinaryImageId is basically a CDN
 export const withOpenLabel = (ResContainer) => { // takes ResContainer function
    return(props) => { //return ResContainer function with enhancement so it is taking props here
        return ( //enhancement jsx is done here
            <div>
                <label className="absolute bg-red-500 shadow-lg rounded-lg p-2 m-4">OPEN</label>
                <ResContainer {...props}/>
            </div>
        );
    };
};
export default ResContainer;