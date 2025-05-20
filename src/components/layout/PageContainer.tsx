import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Header/Navbar";


const initHeaders = (
    <>

        <Navbar />
    </>
);


const initFooters = (
    <>
        <Footer />
    </>
);

const PageContainer = ({
    header = initHeaders,
    footer = initFooters,
    children,
}) => {
    let titleView;


    return (
        <>
            <title>{titleView}</title>

            {header}
            {children}
            {footer}
        </>
    );
};

export default PageContainer;
