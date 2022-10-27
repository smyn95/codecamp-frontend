# FROM ubuntu:22.04

# RUN curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash
# RUN sudo apt install -y nodejs 
# RUN sudo npm install -g yarn

FROM node:14

COPY ./package.json /class_build/
COPY ./yarn.lock /class_build/
# 커서깜박깜박 시간 얼마 안걸림
WORKDIR /class_build/ 
# 위쪽에서부터 실행되므로 바뀐게 있기 전 순간에 적어준다.
RUN yarn install

# RUN mkdir class_build => 아래에서 COPY할 때, 자동으로 만들어 주므로 굳이 안써도 됨
COPY . /class_build/
#  여기까지는 저장 1번해서 저장!
RUN yarn build
# CMD는 한번밖에 못씀 보통 마지막에 한번 쓴다. 저장하지않음 
CMD yarn start 
