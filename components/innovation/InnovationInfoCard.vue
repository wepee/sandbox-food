<template>
  <v-card
    class="ma-0 fill-height"
    :loading="loading"
  >
    <v-col v-if="!loading" width="100%" permanent>
      <v-row>
        <v-col align="center">
          <v-list-item-avatar size="128" class="ma-3">
            <v-img :src="innovation.pictureUrl" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item class="text-h6 text-center">
              {{ innovation.name }}
            </v-list-item>
          </v-list-item-content>
        </v-col>
      </v-row>

      <v-divider />

      <v-list
        three-line
        nav
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-chart-tree</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Category</v-list-item-title>
            <v-list-item-subtitle>
              {{ innovation.category }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-family-tree</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Family</v-list-item-title>
            <v-list-item-subtitle>
              {{ innovation.family }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-file-tree</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Sub-Family</v-list-item-title>
            <v-list-item-subtitle>
              {{ innovation.subFamily }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-map-marker-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Positioning</v-list-item-title>
            <v-list-item-subtitle>
              {{ innovation.positioning }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-tag</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Narrative</v-list-item-title>
            <v-list-item-subtitle>
              {{ innovation.narrative }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-card>
</template>

<script>
export default {
  name: 'InnovationInfoCard',
  props: {
    innovation: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/variables";

.v-list-item__title{
  color: $SECONDARY;
}

</style>
