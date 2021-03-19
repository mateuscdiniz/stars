import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Cadastrar Empresas',
		path: '/cadastroEmpresas',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text'
	},
	{
		title: 'Cadastrar Colaboradores',
		path: '/cadastroColaboradores',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text'
	},

    {
		title: 'Listar Empresas',
		path: '/empresas',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text'
	}
];

