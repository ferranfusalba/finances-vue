<template>
  <div>
    <Label label="BBVA" />
    <cv-data-table
      :columns="columns"
      :pagination="basicPagination"
      :has-expand-all="hasExpandAll"
      ref="table"
    >
      <template v-if="use_expandingSlottedData" slot="data">
        <cv-data-table-row
          v-for="(row, rowIndex) in data"
          :key="`${rowIndex}`"
          :value="`${rowIndex}`"
          :expanded="rowIndex === rowExpanded"
          aria-label-expand-row="Go large"
          aria-label-collapse-row="Go small"
        >
          <cv-data-table-cell
            v-for="(cell, cellIndex) in row"
            :key="`${cellIndex}`"
            :value="`${cellIndex}`"
            v-html="cell"
          ></cv-data-table-cell>
          <template slot="expandedContent"
            >A variety of content types can live here. Be sure to follow Carbon
            design guidelines for spacing and alignment.</template
          >
        </cv-data-table-row>
      </template></cv-data-table
    >
  </div>
</template>

<script>
import Label from "../components/Label.vue";

export default {
  name: "BBVA",
  components: {
    Label,
  },
  data() {
    return {
      columns: [
        "Name",
        "Protocol",
        "Port",
        "Rule",
        "Attached Groups",
        "Status",
      ],
      data: [
        [
          "Load Balancer 11",
          "HTTP",
          "80",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 4",
          "HTTP",
          "81",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 2",
          "HTTP",
          "82",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 3",
          "HTTP",
          "8080",
          "Round Robin",
          "Maureen’s VM Groups",
          "Offline",
        ],
        [
          "Load Balancer 5",
          "HTTP",
          "8001",
          "Round Robin",
          "Maureen’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 11",
          "HTTP",
          "10",
          "Round Robin",
          "Max’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 24",
          "HTTP",
          "11",
          "Round Robin",
          "Max’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 22",
          "HTTP",
          "12",
          "Round Robin",
          "Max’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 23",
          "HTTP",
          "1080",
          "Round Robin",
          "Max’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 25",
          "HTTP",
          "1001",
          "Round Robin",
          "Max’s VM Groups",
          "Failed",
        ],
        [
          "Load Balancer 311",
          "HTTP",
          "280",
          "Round Robin",
          "John’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 324",
          "HTTP",
          "281",
          "Round Robin",
          "John’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 322",
          "HTTP",
          "282",
          "Round Robin",
          "John’s VM Groups",
          "Offline",
        ],
        [
          "Load Balancer 323",
          "HTTP",
          "2080",
          "Round Robin",
          "John’s VM Groups",
          "Active",
        ],
        [
          "Load Balancer 325",
          "HTTP",
          "2001",
          "Round Robin",
          "John’s VM Groups",
          "Active",
        ],
      ],
      basicPagination: false,
      use_expandingSlottedData: true,
      rowExpanded: -1,
      hasExpandAll: false,
    };
  },
};
</script>
