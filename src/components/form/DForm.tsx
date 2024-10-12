import {
  FieldValues,
  FormProvider,
  Resolver,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type DFormConfig = {
  resolver?: Resolver<any, any>; // Type for resolver
  defaultValues?: FieldValues;   // Using FieldValues for defaultValues
};

type DFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  resolver?: Resolver<any, any>;
  defaultValues?: FieldValues;
  className?: string;
} & DFormConfig;

const DForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  className,
}: DFormProps) => {
  const formConfig: DFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  const { handleSubmit } = methods;

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default DForm;
