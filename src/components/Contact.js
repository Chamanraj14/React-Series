const Contact = ()=>{
    return(
        <div>
            <h1>Contact Us</h1>
            <h2>Email : xyz@gmail.com</h2>
            <h2>Phone no. +91 1234567890</h2>
            <form>
                <input type="text" placeholder="name"  className="p-2 m-2 border-black rounded-lg shadow-md"/>
                <input type="text" placeholder="xyz@abc.com" className="p-2 m-2 border-black rounded-lg shadow-md"/>
                <button className="border-black p-2 m-2 bg-red-500 text-white rounded-lg shadow-md">submit</button>

            </form>
        </div>
    )
}
export default Contact;