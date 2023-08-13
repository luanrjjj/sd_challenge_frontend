import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Row,
  Col,
  Tabs,
  Form,
  Select,
  notification,
} from 'antd';
import { Container, Modal } from './styles';
import api from '../../services/api';
import InputAdmin from '../InputAdmin';
// import Button from '../../components/Button';

const { TabPane } = Tabs;
const { Item, useForm } = Form;
const { Option } = Select;

const EditTransactionModal = ({
  visible,

  categories = [],
  types = [],
  families,
  transaction: {
    id: transactionId,
    name,
    category,
    type,
    description,
    amount,
    createdAt,
    // visible: transaction_visible,
  } = {} as any,
  onClose,
  refetch,
}: any) => {
  const [transactionForm] = useForm();
  const [images, setImages] = useState<any>([]);
  const [loading, setLoading] = useState(false);

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

  // const trailDefaultValue = useMemo(()=> {
  //   return trails.find((trail: any) => trail.id === trailId);
  // },[trailId, trails])

  const modalVisible = visible

  return (
     <Modal
      // centered={true}
      visible={modalVisible}
      onCancel={onClose}
      footer={false}
      keyboard={true}
      // className="edit-transaction-modal"
    >
      <Tabs id="edit-user-content" defaultActiveKey="1" type="line">
        <TabPane tab="Informações da transação" key="1" style={{ padding: 4 }}>
          <Form
            form={transactionForm}
            layout="vertical"
            onFinish={async (values) => {
              const {
                name,
                trail,
                family,
                backgroundColor,
                backgroundImage,
                teacher,
                description,
                visible,
              } = values;
              const familyData = families.find((fam: any) => family === fam.name);
              if (transactionId) {
                try {
                  setLoading(true);
                  const data = {
                    name,
                    trail_id: trail,
                    family: familyData?.name,
                    family_image: familyData?.image_url,
                    teacher_id: familyData?.teacher,
                    background_color: backgroundColor,
                    background_image: backgroundImage,
                    visible,
                    description,
                  }
                  await api.put(`/admin/transactions/update/${transactionId}`, data);
                  notification.success({
                    message: 'Transaction added successfully!',
                  });
                  onClose();
                  transactionForm.resetFields()
                  refetch();
                } catch (error) {
                  notification.error({message: 'Erro ao criar curso'});
                } finally {
                  setLoading(false);
                }
              } else {
                try {
                  setLoading(true);
                  const data = {
                    name,
                    trail_id: trail,
                    family: familyData?.name,
                    teacher_id: teacher,
                    family_image: familyData?.image_url,
                    background_color: backgroundColor,
                    background_image: backgroundImage,
                    description,
                    visible,
                  }
                  await api.post(`/admin/transactions/create`, data);
                  notification.success({
                    message: 'Curso atualizado com sucesso!',
                  });
                  onClose();
                  refetch();
                  transactionForm.resetFields()
                } catch (error) {
                  notification.error({message: 'Erro ao atualizar curso'});
                } finally {
                  setLoading(false);
                }
              }
            }}
          >

              <Row gutter={24}>
                <Col span={12}>
                  <Item label="Categorias" name="category">
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
                <Item label="Tipos" name="types">
                  <Select>
                    {types.map((color: any) => (
                      <Option key={color} value={color}>
                      {color}
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
                <button>Salvar</button>
              </Col>
          </Form>
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default EditTransactionModal;
