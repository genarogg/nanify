import React from "react";

import { notify } from "@nano";
import BtnNormalBasic from "@components/btns/basic/btnNormalBasic/index";
import { URL_BACKEND } from "@env";
import { Icon } from "@nano"

import "./sass/_actionCell.scss"


import { MdAddCircleOutline } from "react-icons/md"
import { MdOutlineChromeReaderMode } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineDelete } from "react-icons/md";

interface ActionsCellRendererProps {
  data: any;
}

const ActionsCellRenderer: React.FC<ActionsCellRendererProps> = ({ data }) => {
  const handleEdit = (ci: string) => {
    // Lógica para editar el docente
    console.log("Editar docente:", ci);
  };

  const handleDelete = async (ci: string) => {
    try {
      const response = await fetch(`${URL_BACKEND}/usuario/delete/${ci}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        notify({ message: errorData.error, type: "error" });
      }

      const result = await response.json();
      console.log(result.message);
      notify({ message: result.message, type: "success" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-btn-tablet">
      <BtnNormalBasic onClick={() => handleEdit(data.ci)}>
        <Icon icon={<MdAddCircleOutline />} />
      </BtnNormalBasic>
      <BtnNormalBasic onClick={() => handleEdit(data.ci)}>
        <Icon icon={<MdOutlineChromeReaderMode />} />
      </BtnNormalBasic>
      <BtnNormalBasic onClick={() => handleDelete(data.ci)}>
        <Icon icon={<GrDocumentUpdate />} />
      </BtnNormalBasic>
      <BtnNormalBasic onClick={() => handleDelete(data.ci)}>
        <Icon icon={<MdOutlineDelete />} />
      </BtnNormalBasic>
    </div>
  );
};

export default ActionsCellRenderer;
