<template>
  <div id="program-overview">
    <div class="sm:hidden">
      <select aria-label="Selected tab" class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150">
        <option>Daily Character Videos</option>
        <option selected>
          Program Overview
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex">
          <a href="#" class="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
            Daily Character Videos
          </a>
          <a href="#" class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-blue-500 font-medium text-sm leading-5 text-blue-600 focus:outline-none focus:text-blue-800 focus:border-blue-700">
            Program Overview
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramOverview',
}
</script>
