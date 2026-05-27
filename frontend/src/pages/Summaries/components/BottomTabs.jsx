import { useState, createContext, useContext } from "react";

const TabsContext = createContext();

export function BottomTabs({ children }) {
  const [open, setOpen] = useState({});

  const toggle = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <TabsContext.Provider value={{ open, toggle }}>
      <div className="bottom-tabs-container">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function BottomTab({ id, name, children }) {
  const { open, toggle } = useContext(TabsContext);
  const isOpen = !!open[id];

  return (
    <div className={`bottom-tab ${isOpen ? "open" : "closed"}`}>
      
      <div className="bottom-tab-header" onClick={() => toggle(id)}>
        {name} {isOpen ? "▲" : "▼"}
      </div>

      {isOpen && (
        <div className="bottom-tab-body">
          {children}
        </div>
      )}
    </div>
  );
}