import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Input from '../common/Input';
import Button from '../common/Button';
import Modal from '../common/Modal/';

import {
  ModalWrapper,
  ModalHeader,
  CloseBtn,
  FormulasWrapper,
  Gender,
  Formula,
  FormulasDescription,
  StyledForm,
  FormTitle,
  CalculatesWrapper,
  RequiredAmount,
  CalculatedAmount,
  SaveBtnWrapper,
  CloseIcon,
} from './MyDailyNormaModal.styled';
import { useContext } from 'react';
import { ModalContext } from 'components/common/ModalProvider/ModalProvider';

// import { updateDailyNorma } from 'store/auth/thunk';
import { useAuth } from 'hooks/useAuth';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  gender: Yup.string().required('Required'),
  weight: Yup.number()
    .required('Required')
    .min(0, 'Weight must be a positive number'),
  activityTime: Yup.number()
    .required('Required')
    .min(0, 'Activity time must be a positive number'),
  drankWaterAmount: Yup.number().required('Required'),
});

// export default MyDailyNormaModal;
