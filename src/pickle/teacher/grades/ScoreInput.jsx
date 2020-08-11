import React from 'react';

import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

import {Row, Card, CardBody, FormGroup, Label, Button, CardTitle} from 'reactstrap';
import {Colxx} from '../../commons/CustomComponent';
import './grades.css'


const SignupSchema = Yup.object().shape({
    kor: Yup.number('숫자만 입력해주세요')
        .integer()
        .min(0)
        .max(100)
        .required('숫자를 입력해주세요'),
    eng: Yup.number('숫자만 입력해주세요')
        .integer()
        .min(0)
        .max(100)
        .required('숫자를 입력해주세요'),
    mat: Yup.number('숫자만 입력해주세요')
        .integer()
        .min(0)
        .max(100)
        .required('숫자를 입력해주세요'),
    phl: Yup.number('숫자만 입력해주세요')
        .integer()
        .min(0)
        .max(100)
        .required('숫자를 입력해주세요'),
    eco: Yup.number('숫자만 입력해주세요')
        .integer()
        .min(0)
        .max(100)
        .required('숫자를 입력해주세요'),
    his: Yup.number('숫자만 입력해주세요')
        .integer()
        .min(0)
        .max(100)
        .required('숫자를 입력해주세요'),
    bio: Yup.number('숫자만 입력해주세요')
        .integer()
        .min(0)
        .max(100)
        .required('숫자를 입력해주세요'),
    phy: Yup.number('숫자만 입력해주세요')
        .integer()
        .min(0)
        .max(100)
        .required('숫자를 입력해주세요'),
    for: Yup.number('숫자만 입력해주세요')
        .integer()
        .min(0)
        .max(100)
        .required('숫자를 입력해주세요'),
    details: Yup.string().required('성적을 빠짐없이 입력해주세요'),
});

const ScoreInput = () => {
    const onSubmit = (values) => {
        console.log(values);
    };
    const category = (temp, cate) => temp.map((temp) => (<option key={temp} value={temp}>{temp}{cate}</option>))
    const totalGrade = ["1", "2", "3"]
    const homeClass = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',]
    const studentList = ['김', '이', '박'] //이것만 돌려서 가져오기

    return (<>
        <Row>
            <Colxx xxs="12" lg="2" className="mb-4">
                <Card>
                    <CardBody>
                        <CardTitle>
                            학생 선택
                        </CardTitle>
                        <select className="form-control">
                            {category(totalGrade, '학년')}
                        </select><div style={{paddingTop: 3}}/>
                        <select className="form-control">
                            {category(homeClass, '반')}
                        </select><div style={{paddingTop: 3}}/>
                        <select className="form-control">
                            {category(studentList, '')}
                        </select>
                    </CardBody>
                </Card>
            </Colxx>
            <Colxx xxs="12" lg="10" className="mb-4">
        <Card>
            <CardBody>
                <CardTitle className="mb-4">성적 입력</CardTitle>

                <Formik
                    initialValues={{
                        kor: '',
                        eng: '',
                        mat: '',
                        phl: '',
                        eco: '',
                        his: '',
                        bio: '',
                        phy: '',
                        for: '',

                    }}
                    validationSchema={SignupSchema}
                    onSubmit={onSubmit}
                >
                    {({
                          handleSubmit,
                          setFieldValue,
                          setFieldTouched,
                          values,
                          errors,
                          touched,
                          isSubmitting,
                      }) => (
                        <Form>
                            <Row>
                                <div className="t-grade-div-left">
                                    <FormGroup className="error-l-75">
                                        <Label>국어</Label>
                                        <Field className="form-control" name="kor"/>
                                        {errors.kor && touched.kor ? (
                                            <div className="invalid-feedback d-block">
                                                {errors.kor}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup className="error-l-75">
                                        <Label>영어</Label>
                                        <Field className="form-control" name="eng"/>
                                        {errors.eng && touched.eng ? (
                                            <div className="invalid-feedback d-block">
                                                {errors.eng}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup className="error-l-75">
                                        <Label>수학</Label>
                                        <Field className="form-control" name="mat"/>
                                        {errors.mat && touched.mat ? (
                                            <div className="invalid-feedback d-block">
                                                {errors.mat}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup className="error-l-75">
                                        <Label>생활과 윤리</Label>
                                        <Field className="form-control" name="phl"/>
                                        {errors.phl && touched.phl ? (
                                            <div className="invalid-feedback d-block">
                                                {errors.phl}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup className="error-l-75">
                                        <Label>경제</Label>
                                        <Field className="form-control" name="eco"/>
                                        {errors.eco && touched.eco ? (
                                            <div className="invalid-feedback d-block">
                                                {errors.eco}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                </div>
                                <div className="t-grade-div-right">
                                    <FormGroup className="error-l-75">
                                        <Label>한국사</Label>
                                        <Field className="form-control" name="his"/>
                                        {errors.his && touched.his ? (
                                            <div className="invalid-feedback d-block">
                                                {errors.his}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup className="error-l-75">
                                        <Label>생명과학</Label>
                                        <Field className="form-control" name="bio"/>
                                        {errors.bio && touched.bio ? (
                                            <div className="invalid-feedback d-block">
                                                {errors.bio}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup className="error-l-75">
                                        <Label>물리</Label>
                                        <Field className="form-control" name="phy"/>
                                        {errors.phy && touched.phy ? (
                                            <div className="invalid-feedback d-block">
                                                {errors.phy}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup className="error-l-75">
                                        <Label>제2외국어</Label>
                                        <Field className="form-control" name="for"/>
                                        {errors.for && touched.for ? (
                                            <div className="invalid-feedback d-block">
                                                {errors.for}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                </div>
                            </Row>
                            <br/>
                            <div className="t-grade-div-btn">
                                <Button color="primary" type="submit">
                                    입력
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </CardBody>
        </Card>
            </Colxx>
        </Row>
        </>
    );
};
export default ScoreInput;