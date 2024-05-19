export interface FormValues {
  title: string;
  image: string;
}

export interface CreateTweetFormProps {
  onCreated?: () => void;
}
