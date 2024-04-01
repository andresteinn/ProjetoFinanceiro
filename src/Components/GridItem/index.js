import React from 'react';
import * as C from './styles';
import {
  FaTrash,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
} from 'react-icons/fa';

const GriItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td align="center">
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td align="center">
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GriItem;
