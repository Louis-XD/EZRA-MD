FROM quay.io/loki-xer/jarvis-md:latest
RUN git clone https://github.com/Louis-XD/Ezra-OPEN /root/bot/
WORKDIR /root/bot/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
