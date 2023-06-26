import { useEffect, useRef } from "react";
import CardMenu from "../UI/CardMenu";
import useCloseMenu from "@/source/hooks/useCloseMenu";

const CategoryMenu = ({toggleMenuHandler}) => {
    const menuRef = useCloseMenu(toggleMenuHandler);

    return (
        <CardMenu ref={menuRef}>
            <li>Editar</li>
            <li>Adicionar</li>
            <li>Descontar</li>
            <li>Transferir</li>
        </CardMenu>
    );
};

export default CategoryMenu;