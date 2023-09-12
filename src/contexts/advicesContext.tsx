import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export interface IAdvice {
  id: number;
  advice: string;
}

export interface IDefaultProps {
  children: ReactNode;
}

interface IAdvicesContext {
  getRandomAdvice: () => Promise<void>;
  advice: IAdvice | undefined;
}

export const AdvicesContext = createContext({} as IAdvicesContext);

export const AdvicesContextProvider = ({ children }: IDefaultProps) => {
  const [advice, setAdvice] = useState<IAdvice | undefined>(undefined);

  const getRandomAdvice = async () => {
    try {
      const response = await api.get("/advice");
      setAdvice(response.data.slip);
      toast.success("Advice Generated");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <AdvicesContext.Provider value={{ advice, getRandomAdvice }}>
      {children}
    </AdvicesContext.Provider>
  );
};
