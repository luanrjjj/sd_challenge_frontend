import React, { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Tabs,
  Form,
  Select,
  notification,
} from 'antd';
import { Modal } from './styles';
import InputAdmin from '../InputAdmin';
import { useTransaction } from '../../contexts/transactionContext';
import Button from '../Button';

const { TabPane } = Tabs;
const { Item, useForm } = Form;
const { Option } = Select;

const EditTransactionModal = ({
  visible,
  transaction: {
    id: transactionId,
    name,
    category,
    type,
    description,
    amount,
    createdAt,
  } = {} as any,
  onClose,
}: any) => {
  const [transactionForm] = useForm();
  const [images, setImages] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const { transactions, setTransactions } = useTransaction();

  const categories = ['Rent', 'Food', 'Gym', 'Subscription', 'Other']
  const types = ['deposit', 'withdraw']


  useEffect(() => {
    transactionForm.setFieldsValue({
      name,
      category,
      type,
      amount,
      createdAt,
      description: description,
    });

  }, [transactionId, visible]);

  const updateTransaction = (transactions, newTransaction) => {
    const getTransaction = transactions.find((transaction: any) => transaction.id === newTransaction.id);
    const index = transactions.indexOf(getTransaction);
    transactions[index] = newTransaction;
    setTransactions(transactions)
    onClose()
    return transactions;
  }

  const addTransaction = (transactions, newTransaction) => {
    transactions.push(newTransaction);
    setTransactions(transactions)
    onClose()
    return transactions;
  }

  const modalVisible = visible

  return (
     <Modal
      centered={true}
      visible={modalVisible}
      onCancel={onClose}
      footer={false}
      keyboard={true}
      className="edit-transaction-modal"
    >
      <Tabs id="edit-user-content" defaultActiveKey="1" type="line">
        <TabPane tab="Informações da transação" key="1" style={{ padding: 4 }}>
          <Form
            form={transactionForm}
            layout="vertical"
            onFinish={async (values) => {
              const {
                description,
                amount,
                type,
                category,
              } = values;
              if (transactionId) {
                try {
                  setLoading(true);
                  const data = {
                   id: transactionId,
                   description,
                    amount,
                    type,
                    category,
                    createdAt,
                  }
                  updateTransaction(transactions, data);
                } catch (error) {
                  console.log("error: ", error);
                  notification.error({message: 'Erro ao criar curso'});
                } finally {
                  setLoading(false);
                }
              } else {
                try {
                  const lastId = transactions[transactions.length - 1].id;
                  const data = {
                    id: lastId + 1,
                    description,
                    amount,
                    type,
                    category,
                    createdAt: new Date().toISOString(),
                   }
                   addTransaction(transactions, data);
                } catch (error) {
                  notification.error({message: 'Erro ao criar curso'});
                }

            }}}
          >

              <Row gutter={24}>
                <Col span={12}>
                  <Item label="CATEGORIA" name="category">
                    <Select>
                      {categories.map((category: any) => (
                        <Option key={category} value={category}>
                        {category}
                      </Option>
                      ))}
                    </Select>
                  </Item>
                </Col>

                <Col span={12}>
                <Item label="TIPO" name="type">
                  <Select>
                    {types.map((type: any) => (
                      <Option key={type} value={type}>
                      {type}
                    </Option>
                    ))}
                  </Select>
                  </Item>
                </Col>
              </Row>

              <Row align={'middle'} gutter={24}>
                <Col xs={12} sm={12} md={12}>
                  <Item label="Valor da transação" name="amount" rules={[{ required: true, message: 'Insira o nome' }]}>
                    <InputAdmin type="currency" placeholder="Nome do curso completo" />
                  </Item>
                </Col>
                <Col span={12}>
                    <>
                      <Item label="DESCRIPTION" name="description" rules={[{ required: true, message: 'É necessário uma descrição' }]}>
                      <InputAdmin
                        autoSize={{ minRows: 6, maxRows: 6 }}
                        type="text"
                        placeholder="Escreva a descrição do curso"
                      />
                      </Item>
                    </>
                </Col>
            </Row>
            <Col xs={24} sm={24} md={4}>
                <Button loading={loading}>Salvar</Button>
              </Col>
          </Form>
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default EditTransactionModal;
