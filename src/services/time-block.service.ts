import { axiosWithAuth } from "@/api/interceptors";
import { ITimeBlockResponse } from "@/types/time-block.types";

class TimeBlockService {
    private BASE_URL = "/time-block";

    async getTimeBlocks() {
        const response = await axiosWithAuth.get<ITimeBlockResponse[]>(
            this.BASE_URL
        );
        return response;
    }

    async createTimeBlock(data: ITimeBlockResponse) {
        const response = await axiosWithAuth.post(this.BASE_URL, data);
        return response;
    }

    async updateTimeBlock(id: string, data: ITimeBlockResponse) {
        const response = await axiosWithAuth.put(
            `${this.BASE_URL}/${id}`,
            data
        );
        return response;
    }

    async updateOrderTimeBlock(ids: string[]) {
        const response = await axiosWithAuth.put(
            `${this.BASE_URL}/update-order`,
            ids
        );
        return response;
    }

    async deleteTimeBlock(id: string) {
        const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
        return response;
    }
}

export const timeBlockService = new TimeBlockService();
