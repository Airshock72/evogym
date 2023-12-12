import AnchorLink from "react-anchor-link-smooth-scroll";
import {SelectedPage} from "@/shared/types.ts";

interface LinkProps {
    page: SelectedPage
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Link = (props: LinkProps) => {
    const lowerCasePage = props.page.toLowerCase().replace(/ /g, '') as SelectedPage
    return (
        <AnchorLink
            href={`#${lowerCasePage}`}
            className={`${props.selectedPage === lowerCasePage ? 'text-primary-500' : ''} transition duration-500 hover:text-primary-300`}
            onClick={() => props.setSelectedPage(lowerCasePage)}
        >
        {props.page}
        </AnchorLink>
    )
}

export default Link
