import React from 'react';

import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import TextField from '../../components/TextField';
import { Note } from '../../typings';
import StyledForm from './styles';

export type NoteFormValues = Pick<Note, 'title' | 'comment'>;

export interface NoteFormProps {
  buttonTitle: string;
  defaultValues?: NoteFormValues;
  onSubmit: (data: NoteFormValues) => void;
}

const requiredErrorMessage = 'Поле не может быть пустым';

const NoteForm: React.FC<NoteFormProps> = ({
  buttonTitle,
  defaultValues,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm({
    shouldUseNativeValidation: true,
    defaultValues,
  });

  return (
    <StyledForm noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        lable="Название заметки"
        placeholder="Введите заголовк заметки"
        {...register('title', { required: requiredErrorMessage })}
      />
      <TextArea
        rows={3}
        lable="Комментарий"
        placeholder="Введите комментарий"
        {...register('comment', { required: requiredErrorMessage })}
      />
      <Button type="submit" disabled={isSubmitting || !isDirty}>
        {buttonTitle}
      </Button>
    </StyledForm>
  );
};

export default React.memo(NoteForm);
