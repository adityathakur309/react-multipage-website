import footerData from "../../api/footerApi.json"
import { FooterCard } from "../UI/FooterCard";

export const Footer = () => {
    return (
        <footer className="bg-mutedColor py-10 text-textColor">
        <div className="container flex justify-between flex-wrap gap-4">
            {footerData.map((data) => {
                return <FooterCard key={data.title} data={data} />
            })}
        </div>
        <hr className="my-3" />
        <div className="text-center mt-4">
            © {new Date().getFullYear()} aditya react. All rights reserved.
        </div>
    </footer>
    
    );
};
