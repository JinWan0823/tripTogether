import React from "react";

interface TableRowProps {
  label: string;
  value?: string;
}

const TableRow: React.FC<TableRowProps> = ({ label, value }) => {
  return value ? (
    <tr className="border-b border-[#eaeaea] border-solid">
      <th className="w-[40%] p-[10px] bg-[#f8f8f8]">{label}</th>
      <td className="w-[60%] p-[10px]">{value}</td>
    </tr>
  ) : null;
};

export default TableRow;
