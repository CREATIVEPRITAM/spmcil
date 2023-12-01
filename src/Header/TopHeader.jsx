import "./TopHeader.css";

const TopHeader = () =>{
    return <>
     <section className="top_header flex-center">
        <div className="logos">
            <h1>logo1</h1>
            <h1>logo2</h1>
            <h1>logo3</h1>
        </div>
        <div className="menus flex-center">
            <div className="updates_menu">
                <span>update</span>
                <span>menu</span>
            </div>
            <div className="language">language</div>
        </div>
     </section>
    </>
}

export default TopHeader;