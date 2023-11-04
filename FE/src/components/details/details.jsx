import {
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './details.css';
const Details = () => {
    const { slug } = useParams(); // 'slug' is the name of the parameter you set in your route
  const [datas, setDatas] = useState([]); // Initialize with an empty array
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const api = `http://localhost:5000/details/${slug}`;

      try {
        setIsLoading(true);
        const response = await axios.get(api);
        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setDatas(response.data);
      } catch (error) {
        console.error('API request error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array for one-time execution
  const books = datas.book;
  return (
    <div className='container mt-5'>
      <Grid templateColumns='repeat(2, 1fr)' gap={10}>
        <GridItem>
          <div className='detail-image_container p-3'>
            <Image />
          </div>
        </GridItem>
        <GridItem>
          <div className='detail-image_container p-3'>
            <Center>
              <Heading p={10}>Hello</Heading>
            </Center>
            <div className='detail_content d-flex align-items-center'>
              <p className='text-secondary-emphasis'>Tác giả:</p>{' '}
              <p className='fw-bold'>Nam cao</p>
            </div>
            <Divider />
            <div className='p-3 mb-5'>
              <h1 className='detail_content-pirce'>7000</h1>
              <div className='d-flex align-items-center gap-3'>
                <div class='btn w-100 detail-content_btn btn-outline-danger'>
                  <i class='fa-solid fa-cart-shopping'></i>
                  Thêm vào giỏ hàng
                </div>
                <div class='btn w-100 detail-content_btn btn-danger fw-bold'>
                  Thuê ngay
                </div>
              </div>
            </div>
            <Divider />
            <div className='d-flex align-items-center'>
              <p className='detail-content_cate m-0'>Thể loại:</p>
              <span>Hài hước</span>
            </div>
          </div>
        </GridItem>
      </Grid>
      <div className='tab-container mt-5'>
        <Tabs isFitted>
          <TabList color='grey' align='center'>
            <Tab _selected={{ color: 'black' }}>Mô tả</Tab>
            <Tab _selected={{ color: 'black' }}>Đánh giá</Tab>
            <Tab _selected={{ color: 'black' }}>Thông tin sản phẩm</Tab>
          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='red' borderRadius='1px' />
          <TabPanels>
            <TabPanel>
              <div className='Tab-pannel border p-3'>
                <p className='fs-5'>
                  Nhưng nỗi đau vẫn tiếp tục như thể nó là nỗi đau. Và khi đó là
                  lựa chọn tốt nhất và phải làm điều đó với nỗi đau. Những thú
                  vui của cách thức tố cáo của họ và. Tuyệt vời vì cô đã được
                  chọn là của anh. Và sự êm dịu của những thú vui vì chính chúng
                  ra đi. Theo đó, mọi việc như vậy là không có cách nào cả. Hãy
                  để nó là một sự từ chối tuyệt vời của họ. Một cái gì đó của sự
                  thật cho người có lợi. Vì vậy tôi sẽ mở kết quả và làm theo.
                  Hãy tận hưởng các dịch vụ tại đây. Đó là, trừ khi anh ta muốn
                  được chọn. Để được hãnh diện, hoặc để phân biệt điều mà thường
                  không ai có được. Có điều gì đó phải từ chối và chịu đựng.
                  Hoặc tôi sẽ giải thích rằng chúng ta coi lao động là niềm vui.
                  Những nỗi đau của cơ thể mà từ đó
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='Tab-pannel border p-3'></div>
            </TabPanel>
            <TabPanel>
              <div className='Tab-pannel border p-3'>
                <Table>
                  <Tr>
                    <Th className='table-header'>Mã hàng:</Th>
                    <Td>123</Td>
                  </Tr>
                  <Tr>
                    <Th className='table-header'>Tên tác giả:</Th>
                    <Td>Qminh</Td>
                  </Tr>
                </Table>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div className='related-product_container mt-4'>
        <Heading>Sản phẩm liên quan</Heading>
        <div className='row'>
          <div className='col-lg-4'>
            <Image
              borderRadius={30}
              src='https://cdn0.fahasa.com/media/catalog/product/d/a/dat_rung_phuong_nam_ban_dien_anh_bia.jpg'
            />
            <Heading size='md'>Tên sách</Heading>
            <p>Mục đánh giá</p>
            <p className='detail-content_cate m-0'>Tên tác giả</p>
            <p className='detail_content-pirce'>7000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
