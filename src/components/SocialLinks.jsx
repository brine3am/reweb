import { ArrowUpRight } from "@phosphor-icons/react";

const SocialLinks = () => {
    return(
        <section className="social-section">
            <div className="social-links">
                <h3 className="socLinks" id="dri">Dribble <span id="driA"><ArrowUpRight size={100} weight="bold" /></span></h3>
                <h3 className="socLinks" id="ins">Instagram<span id="insA"><ArrowUpRight size={100} weight="bold" /></span></h3>
                <h3 className="socLinks" id="beh">Behance<span id="behA"><ArrowUpRight size={100} weight="bold" /></span></h3>
                <h3 className="socLinks" id="twi">Twitter<span id="twiA"><ArrowUpRight size={100} weight="bold" /></span></h3>
            </div>
        </section>
    )
}

export default SocialLinks;