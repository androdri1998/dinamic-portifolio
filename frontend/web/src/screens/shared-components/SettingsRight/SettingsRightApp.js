import React, {useState} from 'react';

export default function SettingsRightApp(){
    const [openMenu, setOpenMenu] = useState(false);

    function handlerOpenMenu(){
        const aux = !openMenu;
        setOpenMenu(aux);
    }
    return (
        <>
            <button 
              onClick={handlerOpenMenu}
              className="button-open-settings">
              <i className="material-icons">settings_applications</i>
            </button>
            <div className={openMenu? "settings-right": "settings-right none"}>
              <div className="content-settings">
                <button 
                  onClick={handlerOpenMenu}
                  className="button-open-settings">
                  fechar
                </button>
              </div>
            </div>
        </>
    )
}