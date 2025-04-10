export interface FormState {
  name: string;
  size: number;
}

export interface ShowcaseFormProps {
  state: FormState;
  handleSubmit: (e: React.FormEvent) => void;
  handleClear: () => void;
  handleSizeChange: (value: number) => void;
  handleNameChange: (value: string) => void;
  minValue?: number;
  maxValue?: number;
  step?: number;
}
