FROM quay.io/loki-xer/jarvis-md:latest
RUN git clone https://github.com/Louis-X0/KUNDA-BOT /root/abhi/
WORKDIR /root/abhi/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
