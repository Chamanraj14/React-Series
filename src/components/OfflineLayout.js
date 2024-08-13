import { BORED_IMG } from "../utils/constants";
const OfflineLayout = () => {
    return (
        <>
            <h1>Looks like you are not connected to internet</h1>
            <h2>Please check your connection</h2>
            <img alt="Bored_img" src={BORED_IMG}/> 
        </>
    )
}
export default OfflineLayout;